import {
    Form,
    Input,
    Row,
    Col,
    Upload,
    Select,
    message,
    InputNumber,
} from 'antd';
import { RollbackOutlined, InboxOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import { MotelType } from '~/types/MotelType';
import styles from './AddRoom.module.scss';
import classNames from 'classnames/bind';
import HeaderPage from '~/components/page-header';
import { useEffect, useState } from 'react';
import { getAllMotel } from '~/api/motel.api';
import { addRoom } from '~/api/room.api';
import { useNavigate } from 'react-router-dom';
import { RoomType } from '~/types/RoomType';
import { MESSAGES } from '~/consts/message.const';
const { Option } = Select;
const { Dragger } = Upload;
const cx = classNames.bind(styles);
const { TextArea } = Input;

const AddRoom = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [motels, setMotels] = useState<MotelType[]>();
    const [fileList, setFileList] = useState<any>([]);

    useEffect(() => {
        const getMotels = async () => {
            const { data } = await getAllMotel();

            setMotels(data);
        };
        getMotels();
    }, []);

    const onFinish = async (values: RoomType) => {
        const add = async () => {
            await addRoom(values);
            message.success(MESSAGES.ADD_SUCCESS);
            navigate('/motel-room');
        };
        add();
    };

    const handleBeforeUpload = (file: any) => {
        setFileList([...fileList, file]);
        return false;
    };

    const handleChangeFiles = ({ fileList, file }: any) => {
        setFileList([...fileList]);
    };

    const handleRemove = (selectedFile: any) => {
        return fileList.filter((file: any) => {
            return selectedFile.uid !== file.uid;
        });
    };
    return (
        <div>
            <Content>
                <div></div>
                <div className={cx('form-edit')}>
                    <Form
                        autoComplete='off'
                        layout='vertical'
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 20 }}
                        form={form}
                        onFinish={onFinish}
                    >
                        <HeaderPage
                            title={'Th??m m???i ph??ng tr???'}
                            btn1=' Quay l???i'
                            btn2=' Th??m m???i'
                            iconButton={<RollbackOutlined />}
                            href='/motel-room'
                        ></HeaderPage>
                        <Row gutter={[8, 8]}>
                            <Col span={12}>
                                <Form.Item
                                    name='roomName'
                                    label='Ph??ng s???'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Kh??ng ???????c ????? tr???ng',
                                        },
                                        {
                                            type: 'string',
                                            min: 3,
                                            message: 'Ph???i l???n h??n 3 k?? t???!',
                                        },
                                    ]}
                                >
                                    <Input placeholder='' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name='motelID'
                                    label='Nh??'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Kh??ng ???????c ????? tr???ng',
                                        },
                                    ]}
                                >
                                    <Select defaultValue='M???i ch???n nh??'>
                                        {motels &&
                                            motels.map((item, index) => {
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
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    name='maxPerson'
                                    label='S??? l?????ng ng?????i t???i ??a'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Kh??ng ???????c ????? tr???ng',
                                        },
                                    ]}
                                >
                                    <Input placeholder='' addonAfter='Ng?????i' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name='unitPrice'
                                    label='????n gi??'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Kh??ng ???????c ????? tr???ng',
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        formatter={(value) =>
                                            ` ${value}`.replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ','
                                            )
                                        }
                                        parser={(value) =>
                                            ` ${value}`.replace(
                                                /\$\s?|(,*)/g,
                                                ''
                                            )
                                        }
                                        addonAfter='VN??'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    name='height'
                                    label='D??i'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Kh??ng ???????c ????? tr???ng',
                                        },
                                    ]}
                                >
                                    <Input placeholder='' addonAfter='m' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name='width'
                                    label='R???ng'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Kh??ng ???????c ????? tr???ng',
                                        },
                                    ]}
                                >
                                    <Input placeholder='' addonAfter='m' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    name='description'
                                    label='M?? t??? th??m'
                                >
                                    <TextArea rows={7} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label='H??nh ???nh'>
                                    <Dragger
                                        {...{
                                            fileList,
                                            defaultFileList: fileList,
                                            onRemove: handleRemove,
                                            beforeUpload: handleBeforeUpload,
                                            multiple: true,
                                            onChange: handleChangeFiles,
                                            listType: 'picture',
                                        }}
                                    >
                                        <p className='ant-upload-drag-icon'>
                                            <InboxOutlined />
                                        </p>
                                        <p className='ant-upload-text'>
                                            Click or drag file to this area to
                                            upload
                                        </p>
                                        <p className='ant-upload-hint'>
                                            Support for a single or bulk upload.
                                            Strictly prohibit from uploading
                                            company data or other band files
                                        </p>
                                    </Dragger>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Content>
        </div>
    );
};

export default AddRoom;
