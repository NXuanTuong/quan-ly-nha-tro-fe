/* eslint-disable no-console */
import classNames from 'classnames/bind';
import styles from './DataPower.module.scss';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    Button,
    Col,
    PageHeader,
    Row,
    Form,
    DatePicker,
    Select,
    Table,
    InputNumber,
    Modal,
    message,
} from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { SearchOutlined, CheckOutlined, SaveOutlined } from '@ant-design/icons';
import { getStatisticalRoomStatus } from '~/api/room.api';
import { IDataPower } from '~/types/DataPower.type';
import { MotelType } from '~/types/MotelType';
import { getAllMotel } from '~/api/motel.api';
import { editDataPower, listDataPower } from '~/api/data-power.api';
import { MESSAGES } from '~/consts/message.const';
import moment from 'moment';

const cx = classNames.bind(styles);
const { Option } = Select;
const dateFormat = 'MM/YYYY';

const EditableContext = React.createContext<FormInstance<any> | null>(null);
interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof IDataPower;
    record: IDataPower;
    handleSave: (record: IDataPower) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
                useValue: values.newValue
                    ? values.newValue - record.oldValue
                    : record.newValue - values.oldValue,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${dataIndex} is required.`,
                    },
                ]}
            >
                <InputNumber ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className='editable-cell-value-wrap'
                style={{ paddingRight: 24 }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const ColumnsDataPower: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: any;
})[] = [
    {
        title: 'Nhà',
        dataIndex: ['motelID', 'name'],
        key: 'motelID',
    },
    {
        title: 'Phòng',
        dataIndex: 'roomName',
        key: 'roomName',
    },
    {
        title: 'Khách thuê',
        dataIndex: 'customerName',
        key: 'customerName',
    },
    {
        title: 'Chỉ số cũ',
        dataIndex: 'oldValue',
        key: 'oldValue',
        editable: true,
        render: (oldValue) => {
            return (
                <>
                    <InputNumber value={oldValue} />
                </>
            );
        },
    },
    {
        title: 'Chỉ số mới',
        dataIndex: 'newValue',
        key: 'newValue',
        editable: true,
        render: (newValue) => {
            return (
                <>
                    <InputNumber value={newValue} />
                </>
            );
        },
    },
    {
        title: 'Sử dụng',
        dataIndex: 'useValue',
        key: 'useValue',
    },
    {
        title: '',
        dataIndex: 'recond',
        render: (text, record) => {
            return (
                <>
                    <Button
                        htmlType='submit'
                        type='primary'
                        icon={<SaveOutlined />}
                        onClick={() => handleSubmitData(record)}
                    >
                        Lưu
                    </Button>
                </>
            );
        },
    },
];
function handleSubmitData(record: any) {
    if (record.useValue < 0) {
        Modal.error({
            title: 'Thông báo',
            content: 'Chỉ số điện mới phải lớn hơn chỉ số điện mới',
        });
    } else {
        Modal.confirm({
            centered: true,
            title: `Bạn có đồng ý lưu chỉ số điện ${record.roomName} trong tháng 09/2022 không ?`,
            cancelText: 'Cancel',
            okText: 'Lưu',
            onOk: () => handSubmitData(record),
        });
    }
}
const handSubmitData = async (record: any) => {
    const tempData = {
        _id: record._id,
        motelID: record.motelID,
        roomName: record.roomName,
        customerName: record.customerName,
        oldValue: record.oldValue,
        newValue: record.newValue,
        useValue: record.useValue,
    };
    await editDataPower({ data: tempData });
    message.success(MESSAGES.EDIT_SUCCESS);
};

function handleSaveAll(dataPower: any) {
    Modal.confirm({
        centered: true,
        title: `Bạn có đồng ý lưu chỉ số điện của tháng 09/2022 cho toàn bộ các phòng của nhà đang chọn không ?`,
        cancelText: 'Cancel',
        okText: 'Lưu',
        onOk: () => handleSaveAllData(dataPower),
    });
}

const handleSaveAllData = (dataPower: any) => {
    dataPower.map(async (item: any) => {
        await editDataPower({ data: item });
    });
    message.success(MESSAGES.EDIT_SUCCESS);
};
const PowerOnly = () => {
    const [dataPower, setDataPower] = useState<IDataPower[]>([]);
    const [listNameMotel, setListNameMotel] = useState<MotelType[]>([]);
    const [listStatusRoom, setListStatusRoom] = useState([]);
    useEffect(() => {
        const listMotelRoom = async () => {
            const { data } = await listDataPower();

            setDataPower(data);
        };

        listMotelRoom();
        const getListData = async () => {
            const { data } = await getAllMotel();
            setListNameMotel(data);
        };
        getListData();

        const getListDataStatus = async () => {
            const { data } = await getStatisticalRoomStatus();
            setListStatusRoom(data);
        };
        getListDataStatus();
    }, []);
    const handleSave = (row: IDataPower) => {
        const newData = [...dataPower];
        const index = newData.findIndex((item) => row._id === item._id);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataPower(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = ColumnsDataPower.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: IDataPower) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                handleSave,
            }),
        };
    });

    return (
        <div>
            <div>
                <PageHeader
                    className={cx('header-top')}
                    title='Chỉ số điện'
                    extra={[
                        <Button icon={<SearchOutlined />} key={1}>
                            Xem
                        </Button>,
                        <Button
                            onClick={() => handleSaveAll(dataPower)}
                            type='primary'
                            icon={<CheckOutlined />}
                            key={2}
                        >
                            Lưu thông tin
                        </Button>,
                    ]}
                ></PageHeader>
            </div>

            <div className={cx('header-bottom')}>
                <Row gutter={[8, 8]}>
                    <Col span={6}>
                        <Form.Item
                            // initialValue={moment(new Date(), dateFormat)}
                            label={<>Tháng/năm</>}
                            colon={false}
                        >
                            <DatePicker
                                defaultValue={moment()}
                                format={dateFormat}
                                name='date'
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label={<>Kỳ</>} colon={false}>
                            <Select
                                style={{ width: 150 }}
                                defaultValue='Tất cả'
                                showSearch
                            >
                                <Option value={2}>Kỳ 30</Option>
                                <Option value={3}>Kỳ 15</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label={<>Nhà</>} colon={false}>
                            <Select
                                style={{ width: 150 }}
                                defaultValue='Tất cả'
                                showSearch
                            >
                                {listNameMotel &&
                                    listNameMotel.map((item, index) => {
                                        return (
                                            <Option
                                                key={index}
                                                value={item._id}
                                            >
                                                {item.name}
                                            </Option>
                                        );
                                    })}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label={<>Trạng thái nhà</>} colon={false}>
                            <Select
                                style={{ width: 150 }}
                                defaultValue='Tất cả'
                                showSearch
                            >
                                {listStatusRoom &&
                                    listStatusRoom.map((item: any, index) => {
                                        return (
                                            <Option key={index}>
                                                {item.statusName}
                                            </Option>
                                        );
                                    })}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </div>

            <div>
                <Table
                    components={components}
                    dataSource={dataPower}
                    columns={columns as ColumnTypes}
                />
            </div>
        </div>
    );
};

export default PowerOnly;
