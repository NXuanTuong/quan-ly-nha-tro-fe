import {
    Button,
    Col,
    PageHeader,
    Row,
    Form,
    Input,
    Select,
    Checkbox,
    InputNumber,
    message,
} from 'antd';
import { useEffect } from 'react';
import { RollbackOutlined, SaveOutlined } from '@ant-design/icons';

import { serviceTypeOptions } from '~/consts/service.const';
import { IService } from '~/types/Service.type';
import { createService, updateService } from '~/feature/service/serviceSlice';
import { useAppDispatch } from '~/app/hooks';
import { useGetParam } from '~/utils/helper';
import { getServiceAPI } from '~/api/service.api';
import { MESSAGES } from '~/consts/message.const';
const { Option } = Select;

const AddEditService = () => {
    const [param] = useGetParam('serviceId');
    const [form] = Form.useForm<IService>();
    const dispatch = useAppDispatch();

    const goBack = () => {
        window.history.back();
    };
    const onSubmit = async (value: IService) => {
        let service;
        service = serviceTypeOptions.find(
            (item) => item.serviceTypeId === +value.serviceTypeId
        );

        if (param) {
            service = serviceTypeOptions.find((item) => {
                if (Number(value.serviceTypeId)) {
                    return item.serviceTypeId === +value.serviceTypeId;
                }
                return item.serviceTypeName === String(value.serviceTypeId);
            });
            const payload = {
                ...value,
                ...service,
            };
            dispatch(updateService({ ...payload, _id: param }));
            message.success(MESSAGES.EDIT_SUCCESS);
            goBack();
            return;
        }
        const payload = {
            ...value,
            ...service,
        };
        await dispatch(createService(payload));
        message.success(MESSAGES.ADD_SUCCESS);
        goBack();
        return;
    };
    useEffect(() => {
        if (param) {
            const fetchData = async () => {
                const { data } = await getServiceAPI(param);
                form.setFieldsValue({
                    serviceName: data.serviceName,
                    serviceTypeId: data.serviceTypeName,
                    unitPrice: +data.unitPrice,
                    isActive: data.isActive,
                    note: data.note,
                });
            };
            fetchData();
        }
    }, [param]);

    return (
        <div>
            <Form
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 16 }}
                size={'large'}
                onFinish={onSubmit}
                form={param ? form : undefined}
            >
                <div>
                    <PageHeader
                        ghost={true}
                        title={`${param ? 'S???a' : 'Th??m'} d???ch v???`}
                        extra={[
                            <Button
                                type='ghost'
                                key={1}
                                icon={<RollbackOutlined />}
                                onClick={goBack}
                            >
                                Quay v???
                            </Button>,
                            <Button
                                type='primary'
                                key={2}
                                icon={<SaveOutlined />}
                                htmlType='submit'
                            >
                                L??u
                            </Button>,
                        ]}
                    ></PageHeader>
                </div>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label={<>T??n d???ch v???</>}
                            labelAlign='left'
                            name='serviceName'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Vui l??ng kh??ng b??? tr???ng tr?????ng n??y!',
                                },
                            ]}
                            validateTrigger={['onBlur', 'onChange']}
                        >
                            <Input autoFocus />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={<>Lo???i d???ch v???</>}
                            labelAlign='left'
                            name='serviceTypeId'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Vui l??ng nh???p t??n ng?????i d??ng c???a b???n!',
                                },
                            ]}
                            validateTrigger={['onBlur', 'onChange']}
                        >
                            <Select>
                                {serviceTypeOptions.map((serviceType) => (
                                    <Option key={serviceType.serviceTypeId}>
                                        {serviceType.serviceTypeName}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label={<>????n gi??</>}
                            labelAlign='left'
                            name='unitPrice'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Vui l??ng kh??ng b??? tr???ng tr?????ng n??y!',
                                },
                            ]}
                            validateTrigger={['onBlur', 'onChange']}
                        >
                            <InputNumber
                                formatter={(value) =>
                                    ` ${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ','
                                    )
                                }
                                parser={(value) =>
                                    ` ${value}`.replace(/\$\s?|(,*)/g, '')
                                }
                                addonAfter='VN??'
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name='isActive' valuePropName='checked'>
                            <Checkbox checked={true}>S??? d???ng</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            name='note'
                            label='Ghi ch??'
                            labelAlign='left'
                        >
                            <Input.TextArea allowClear />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default AddEditService;
