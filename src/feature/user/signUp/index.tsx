/* eslint-disable @typescript-eslint/no-explicit-any */
import { notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import styles from './signUp.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from '~/types/User.type';
import { signUp, verifyOtp } from '~/api/auth.api';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<any> = async (data: IUser) => {
        try {
            await signUp(data);
            const otp = prompt(
                'Vui lòng kiểm tra email của bạn và nhập mã vào bên dưới'
            );
            if (!otp) {
                return;
            }
            await verifyOtp({ email: data.email, otp });
            await notification.open({
                message: 'Đăng ký tài khoản thành công',
                icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
            });
            navigate('/login');
        } catch (error: any) {
            return notification.error({
                message: error.messages,
                icon: <CheckCircleOutlined style={{ color: '#fe0000' }} />,
            });
        }
    };
    return (
        <div className={styles['wrapper']}>
            <div className={styles['center']}>
                <h1 className=''>Đăng ký</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles['txt_field']}>
                        <input
                            type='text'
                            {...register('name', {
                                required: true,
                            })}
                        />
                        {errors?.email?.type === 'required' && (
                            <span className={styles['my-error']}>
                                Vui lòng không bỏ trống trường này
                            </span>
                        )}
                        {/* <span></span> */}
                        <label htmlFor=''>Tên đăng nhập</label>
                    </div>
                    <div className={styles['txt_field']}>
                        <input
                            type='email'
                            {...register('email', {
                                required: true,
                            })}
                        />
                        {errors?.email?.type === 'required' && (
                            <span className={styles['my-error']}>
                                Vui lòng không bỏ trống trường này
                            </span>
                        )}
                        {/* <span></span> */}
                        <label htmlFor=''>Email đăng nhập</label>
                    </div>
                    <div className={styles['txt_field']}>
                        <input
                            type='number'
                            {...register('phone', {
                                required: true,
                            })}
                        />
                        {errors?.email?.type === 'required' && (
                            <span className={styles['my-error']}>
                                Vui lòng không bỏ trống trường này
                            </span>
                        )}
                        <label htmlFor=''>Số điện thoại</label>
                    </div>
                    <div className={styles['txt_field']}>
                        <input
                            type='password'
                            {...register('password', {
                                required: true,
                            })}
                        />
                        {errors?.password?.type === 'required' && (
                            <span className={styles['my-error']}>
                                Vui lòng không bỏ trống trường này
                            </span>
                        )}
                        <label htmlFor=''>Mật khẩu</label>
                    </div>
                    <button className={styles['btn_login']} type='submit'>
                        Đăng Ký
                    </button>
                    <div className={styles['signup_link']}></div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
