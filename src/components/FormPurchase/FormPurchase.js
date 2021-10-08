import {Card, CardContent, Typography} from '@material-ui/core'
import React from 'react';
import {Formik} from "formik";
import './FormPurchase.css'
import * as yup from 'yup';
import {modalOperations} from "../../store/modal";
import {useDispatch} from "react-redux";
import {cartOperations} from "../../store/cart";
import NumberFormat from "react-number-format";

const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm

const FormPurchase = ({cartTotal}) => {
    const validationsSchema = yup.object().shape({
        name: yup.string().min(3, 'Минимум 3 символа').max(15, 'Максимум 15 символов').typeError('Должно быть строкой').required('Обязательно'),
        secondName: yup.string().min(3, 'Минимум 3 символа').max(15, 'Максимум 15 символов').typeError('Должно быть строкой').required('Обязательно'),
        userAge: yup.number().min(18, 'Вам нет 18 лет').typeError('Только цифры').positive().integer().required('Обязательно'),
        deliveryAddress: yup.string().required('Обязательно'),
        mobilePhone: yup.string().matches(phoneRegExp, 'Введите валидный номер').required('Обязательно'),
        email: yup.string().email('Введите верный "email"').required('Обязательно'),
        confirmEmail: yup.string().email('Введите верный "email"').oneOf([yup.ref('email')], "Адреса не совпадают").required('Обязательно'),
    })

    const dispatch = useDispatch()

    return (
        <div>
            <div className="modalOverlay" onClick={() => {
                dispatch(modalOperations.toggleModal("Close"))
            }}/>
            <Card className={'form-purchase'}>
                <CardContent>
                    <Typography variant="h4" className={'formikTitle'}>Оформление заказа</Typography>
                    <Formik initialValues={{
                        name: '',
                        secondName: '',
                        userAge: '',
                        deliveryAddress: '',
                        mobilePhone: '',
                        email: '',
                        confirmEmail: ''
                    }}
                            validateOnBlur
                            onSubmit={(values) => {
                                console.log(cartTotal)
                                console.log(values)
                                dispatch(cartOperations.checkoutClearCart())
                                dispatch(modalOperations.toggleModal())
                            }}
                            validationSchema={validationsSchema}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              isValid,
                              handleSubmit,
                              dirty
                          }) => (
                            <div className={'form'}>

                                <p>
                                    <label htmlFor={"name"}>Имя</label><br/>
                                    <input type="text"
                                           placeholder="Enter you name"
                                           className={'input'}
                                           name={'name'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.name}
                                    />
                                </p>
                                {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}

                                <p>
                                    <label htmlFor={"secondName"}>Фамилия</label><br/>
                                    <input type="text"
                                           placeholder="Enter you second name"
                                           className={'input'}
                                           name={'secondName'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.secondName}
                                    />
                                </p>
                                {touched.secondName && errors.secondName &&
                                <p className={'error'}>{errors.secondName}</p>}

                                <p>
                                    <label htmlFor={"userAge"}>Введите Ваш возраст</label><br/>
                                    <input type="number"
                                           placeholder="Enter you age"
                                           className={'input'}
                                           name={'userAge'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.userAge}
                                    />
                                </p>
                                {touched.userAge && errors.userAge && <p className={'error'}>{errors.userAge}</p>}

                                <p>
                                    <label htmlFor={"deliveryAddress"}>Введите адрес доставки</label><br/>
                                    <input type="string"
                                           placeholder="Enter delivery address"
                                           className={'input'}
                                           name={'deliveryAddress'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.deliveryAddress}
                                    />
                                </p>
                                {touched.deliveryAddress && errors.deliveryAddress &&
                                <p className={'error'}>{errors.deliveryAddress}</p>}

                                <p>
                                    <label htmlFor={"mobilePhone"}>Введите мобильный телефон</label><br/>
                                    <NumberFormat
                                        // hintText="Some placeholder"
                                        format="+38(###)###-##-##"
                                        placeholder="Enter phone number"
                                        className={'input'}
                                        name={'mobilePhone'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mobilePhone}
                                    />
                                </p>
                                {/*<p>*/}
                                {/*    <label htmlFor={"mobilePhone"}>Введите мобильный телефон</label><br/>*/}
                                {/*    <input type="tel"*/}
                                {/*           placeholder="Enter phone number"*/}
                                {/*           className={'input'}*/}
                                {/*           name={'mobilePhone'}*/}
                                {/*           onChange={handleChange}*/}
                                {/*           onBlur={handleBlur}*/}
                                {/*           value={values.mobilePhone}*/}
                                {/*    />*/}
                                {/*</p>*/}
                                {touched.mobilePhone && errors.mobilePhone &&
                                <p className={'error'}>{errors.mobilePhone}</p>}

                                <p>
                                    <label htmlFor={"email"}>Введите адрес 'email'</label><br/>
                                    <input type="email"
                                           placeholder="Enter you email"
                                           className={'input'}
                                           name={'email'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.email}
                                    />
                                </p>
                                {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}

                                <p>
                                    <label htmlFor={"confirmEmail"}>Подтвердите 'email'</label><br/>
                                    <input type="email"
                                           placeholder="Please confirm you email"
                                           className={'input'}
                                           name={'confirmEmail'}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.confirmEmail}
                                    />
                                </p>
                                {touched.confirmEmail && errors.confirmEmail &&
                                <p className={'error'}>{errors.confirmEmail}</p>}
                                <div className={'formButtons'}>
                                    <button
                                        disabled={!isValid && !dirty}
                                        onClick={handleSubmit}
                                        type={'submit'}
                                    >Отправить
                                    </button>
                                    <button
                                        onClick={() => dispatch(modalOperations.toggleModal())}
                                    >Отменить оформление
                                    </button>
                                </div>
                            </div>
                        )}
                    </Formik>
                </CardContent>
            </Card>
        </div>
    );
};

export default FormPurchase;