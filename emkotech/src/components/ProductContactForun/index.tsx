import { getTranslations } from '@/services/Request';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductContact({
    id,
    isOpen,
}: {
    id: number;
    isOpen: boolean;
}) {
    const router = useRouter();
    const [isContact, setisContact] = useState<boolean>(isOpen);
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const { lang } = router.query;
    const language = lang ? lang?.toString() : 'az';
    const { data: translationsData } = useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });
    return (
        <>
            <div
                className={`fixed ${
                    !isOpen ? ' scale-[0]  ' : ' scale-100 duration-300'
                } top-0 w-[100vw]  h-[100vh] z-[9999999999]  flex justify-center items-center `}
            >
                <div
                    className="bg-black bg-opacity-55 w-full h-full absolute top-0"
                    onClick={() => setisContact(false)}
                ></div>
                <div className=" z-20  bg-white rounded-[18px] relative px-[46px] max-sm:px-6 max-sm:py-6 py-[50px] flex flex-col max-sm:gap-2  gap-6">
                    <button
                        className=" absolute top-[32px]   right-[27px]"
                        onClick={() => setisContact(false)}
                    >
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_1090_1339)">
                                <path
                                    d="M10.8 26.616L18 19.416L25.2 26.616L26.616 25.2L19.416 18L26.616 10.8L25.2 9.384L18 16.584L10.8 9.384L9.384 10.8L16.584 18L9.384 25.2L10.8 26.616ZM18.006 36C15.518 36 13.178 35.528 10.986 34.584C8.79533 33.6387 6.88933 32.356 5.268 30.736C3.64667 29.116 2.36333 27.212 1.418 25.024C0.472667 22.836 0 20.4967 0 18.006C0 15.5153 0.472667 13.1753 1.418 10.986C2.362 8.79533 3.64267 6.88933 5.26 5.268C6.87733 3.64667 8.782 2.36333 10.974 1.418C13.166 0.472667 15.506 0 17.994 0C20.482 0 22.822 0.472667 25.014 1.418C27.2047 2.362 29.1107 3.64333 30.732 5.262C32.3533 6.88067 33.6367 8.78533 34.582 10.976C35.5273 13.1667 36 15.506 36 17.994C36 20.482 35.528 22.822 34.584 25.014C33.64 27.206 32.3573 29.112 30.736 30.732C29.1147 32.352 27.2107 33.6353 25.024 34.582C22.8373 35.5287 20.498 36.0013 18.006 36ZM18 34C22.4667 34 26.25 32.45 29.35 29.35C32.45 26.25 34 22.4667 34 18C34 13.5333 32.45 9.75 29.35 6.65C26.25 3.55 22.4667 2 18 2C13.5333 2 9.75 3.55 6.65 6.65C3.55 9.75 2 13.5333 2 18C2 22.4667 3.55 26.25 6.65 29.35C9.75 32.45 13.5333 34 18 34Z"
                                    fill="#B2B2B2"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1090_1339">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <h4 className="text-[36px] font-medium">
                        {translationsData?.data?.SifarisEt}
                    </h4>
                    <Formik
                        initialValues={{
                            name: '',
                            surname: '',
                            email: '',
                            phone: '',
                            note: '',
                        }}
                        validate={(values) => {
                            const errors: { phone?: string } = {};
                            const phoneRegex = /^\d{3} \d{3} \d{2} \d{2}$/;
                            if (!phoneRegex.test(values.phone)) {
                                errors.phone =
                                    'Invalid phone format. Expected format: XXX XXX XX XX';
                            }
                            return errors;
                        }}
                        onSubmit={async (values) => {
                            setIsLoading(true);
                            axios
                                .post(
                                    `https://emkotech.epart.az/api/product/${id}/order`,
                                    {
                                        firstname: values.name,
                                        email: values.email,
                                        phone: values.phone,
                                        info: values.note,
                                        lastname: values.surname,
                                    }
                                )
                                .then(() => {
                                    setisContact(false);
                                    setIsLoading(false);
                                    values.name = '';
                                    values.surname = '';
                                    values.email = '';
                                    values.phone = '';
                                    values.note = '';
                                    toast.success('sifaris edildi');
                                })
                                .catch((error) => {
                                    toast.error('somthing went wrong');

                                    console.log(error);
                                });
                            console.log('values', values);
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-6"
                            >
                                <div className="flex flex-row max-sm:flex-col gap-[24px] w-full max-sm:gap-1">
                                    <div className="flex flex-col gap-4 w-full max-sm:gap-2">
                                        <label
                                            htmlFor="name"
                                            className="text-[16px] font-medium"
                                        >
                                            {translationsData?.data?.Name}
                                        </label>
                                        <input
                                            placeholder={
                                                translationsData?.data?.Name
                                            }
                                            className="h-[55px] max-sm:h-[40px] px-[20px] py-[17px] text-[#6F6F6F] focus:outline-none w-full border-[#CBCAD7] border rounded-lg"
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 w-full max-sm:gap-2">
                                        <label
                                            htmlFor="surname"
                                            className="text-[16px] font-medium"
                                        >
                                            {translationsData?.data?.Soyad}
                                        </label>
                                        <input
                                            placeholder={
                                                translationsData?.data?.Soyad
                                            }
                                            className="h-[55px] max-sm:h-[40px] px-[20px] py-[17px] text-[#6F6F6F] focus:outline-none w-full border-[#CBCAD7] border rounded-lg"
                                            type="text"
                                            name="surname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.surname}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row max-sm:flex-col gap-[24px] w-full max-sm:gap-2">
                                    <div className="flex flex-col gap-4 w-full max-sm:gap-2">
                                        <label
                                            htmlFor="email"
                                            className="text-[16px] font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            placeholder="example@gmail.com"
                                            className="h-[55px] max-sm:h-[40px] px-[20px] py-[17px] text-[#6F6F6F] focus:outline-none w-full border-[#CBCAD7] border rounded-lg"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 w-full max-sm:gap-2">
                                        <label
                                            htmlFor="phone"
                                            className="text-[16px] font-medium"
                                        >
                                            {
                                                translationsData?.data
                                                    ?.Əlaqə_nömrəsi
                                            }
                                        </label>
                                        <div className="h-[55px] max-sm:h-[40px] overflow-hidden flex flex-row text-[#6F6F6F] focus:outline-none w-full border-[#CBCAD7] border rounded-lg">
                                            <p className="h-[55px] max-sm:h-[40px] px-[20px] py-[17px] max-sm:py-2">
                                                +994{' '}
                                            </p>
                                            <input
                                                placeholder="XX XXX XX XX "
                                                type="text"
                                                name="phone"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                className="h-[55px] max-sm:h-[40px] pr-[20px] py-[15px] text-[#6F6F6F] focus:outline-none w-full"
                                            />
                                        </div>
                                        {errors.phone && touched.phone && (
                                            <div className="text-red-500 text-sm">
                                                {errors.phone}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-full max-sm:gap-2">
                                    <label
                                        htmlFor="note"
                                        className="text-[16px] font-medium"
                                    >
                                        {translationsData?.data?.Qeyd}
                                    </label>
                                    <textarea
                                        placeholder={
                                            translationsData?.data?.Qeyd
                                        }
                                        className="h-[114px] max-sm:h-[90px] px-[20px] overflow-hidden py-[17px] text-[#6F6F6F] focus:outline-none w-full border-[#CBCAD7] border rounded-lg"
                                        name="note"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.note}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#186FE0] w-full h-[] py-[16px] text-center rounded-[18px] text-white"
                                    disabled={IsLoading}
                                >
                                    {IsLoading
                                        ? 'Loading...'
                                        : translationsData?.data?.SifarisEt}
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
