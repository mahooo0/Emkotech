import BreadcrumbNavigation from '@/components/BreadCamp';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    getContacts,
    getTranslations,
    postUserRequest,
} from '@/services/Request';
import { useLanguage } from '@/components/Hoc/LanguageContext';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSchema = Yup.object().shape({
    fullName: Yup.string().required('Ad və soyad tələb olunur'),
    phone: Yup.string().required('Telefon nömrəsi tələb olunur'),
    notes: Yup.string(),
});

interface FormValues {
    fullName: string;
    phone: string;
    notes: string;
}

const Contact = () => {
    const { language } = useLanguage();
    const { data, isLoading } = useQuery({
        queryKey: ['contacts'],
        queryFn: () => getContacts(language),
    });
    const { data: translationsData } = useQuery({
        queryKey: ['translations', language],
        queryFn: () => getTranslations(language),
    });

    const handleSubmit = async (
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
    ) => {
        console.log(values);
        const newValues = {
            category_id: '2',
            name: values.fullName,
            phone: values.phone,
            note: values.notes,
        };
        console.log(newValues);
        try {
            await postUserRequest(newValues);

            toast.success('Müraciət göndərildi');
        } catch (error) {
            console.log(error);
            toast.error('Müraciət göndərilərkən xəta baş verdi');
        }

        // Handle form submission here
        setSubmitting(false);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div>
            <Header activeindex={5} />
            <main>
                <BreadcrumbNavigation
                    items={[
                        {
                            text: `${translationsData?.data?.Əlaqə}`,
                            path: '/contact',
                        },
                    ]}
                />
                <section className="flex flex-col text-black lg:px-[100px] md:px-[60px] px-[30px] mt-6 ">
                    <h1
                        data-layername="məhsullar"
                        className="self-center text-5xl max-md:text-4xl"
                    >
                        {translationsData?.data?.Əlaqə}
                    </h1>
                    <div
                        className="rounded-xl overflow-hidden mt-6"
                        style={{
                            backgroundImage: `url(${data.image})`,
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="p-16 w-full max-md:px-5 max-md:max-w-full bg-opacity-60 bg-black ">
                            <div className="flex lg:gap-[111px] gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col mt-1 text-white max-md:mt-10 max-md:max-w-full">
                                        <div className="text-4xl font-semibold max-md:max-w-full">
                                            {
                                                translationsData?.data
                                                    ?.Bizimlə_əlaqə
                                            }
                                        </div>
                                        <div className="flex flex-col mt-7 gap-3 w-full text-base max-md:max-w-full">
                                            {data.data.map(
                                                (contact: {
                                                    id: number;
                                                    icon: string;
                                                    data: string;
                                                }) => (
                                                    <div
                                                        key={contact.id}
                                                        className="flex overflow-hidden flex-col justify-center items-start p-2 w-full rounded-2xl bg-white bg-opacity-20 max-md:pr-5 max-md:max-w-full"
                                                    >
                                                        <div className="flex gap-3 items-center">
                                                            <img
                                                                loading="lazy"
                                                                src={
                                                                    contact.icon
                                                                }
                                                                className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                                                            />
                                                            <div className="self-stretch my-auto">
                                                                {contact.data}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex overflow-hidden flex-col grow justify-center p-7 w-full rounded-3xl bg-white bg-opacity-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                        <div className="flex flex-col max-md:max-w-full">
                                            <div className="text-xl font-semibold text-center text-white max-md:max-w-full">
                                                {
                                                    translationsData?.data
                                                        ?.Formu_doldur_biz_əlaqə_saxlayaq
                                                }
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    fullName: '',
                                                    phone: '',
                                                    notes: '',
                                                }}
                                                validationSchema={ContactSchema}
                                                onSubmit={handleSubmit}
                                            >
                                                {({
                                                    errors,
                                                    touched,
                                                    isSubmitting,
                                                }) => (
                                                    <Form className="flex flex-col mt-7 w-full text-base max-md:max-w-full">
                                                        <div className="flex flex-col w-full text-black text-opacity-60 max-md:max-w-full">
                                                            <Field
                                                                name="fullName"
                                                                type="text"
                                                                placeholder={
                                                                    translationsData
                                                                        ?.data
                                                                        ?.Ad_və_soyad
                                                                }
                                                                className="px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] outline-none"
                                                            />
                                                            {errors.fullName &&
                                                                touched.fullName && (
                                                                    <div className="text-red-500 mt-1 ml-4">
                                                                        {
                                                                            errors.fullName
                                                                        }
                                                                    </div>
                                                                )}
                                                        </div>

                                                        <div className="flex flex-col mt-3 w-full text-black text-opacity-60 max-md:max-w-full">
                                                            <div className="flex items-center px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                                                                <span className="text-black">
                                                                    +994
                                                                </span>
                                                                <Field
                                                                    name="phone"
                                                                    type="tel"
                                                                    placeholder="00 000 00 00"
                                                                    className="ml-2 w-full bg-transparent outline-none"
                                                                />
                                                            </div>
                                                            {errors.phone &&
                                                                touched.phone && (
                                                                    <div className="text-red-500 mt-1 ml-4">
                                                                        {
                                                                            errors.phone
                                                                        }
                                                                    </div>
                                                                )}
                                                        </div>

                                                        <div className="flex flex-col mt-3 w-full rounded-2xl min-h-[111px] max-md:max-w-full">
                                                            <Field
                                                                as="textarea"
                                                                name="notes"
                                                                placeholder={
                                                                    translationsData
                                                                        ?.data
                                                                        ?.Qeyd
                                                                }
                                                                className="px-5 pt-4 pb-20 w-full bg-white border border-solid border-black border-opacity-10 rounded-3xl outline-none resize-none"
                                                            />
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            disabled={
                                                                isSubmitting
                                                            }
                                                            className="self-stretch px-7 py-3.5 mt-7 font-medium text-white bg-blue-600 rounded-2xl max-md:px-5 max-md:max-w-full disabled:opacity-50"
                                                        >
                                                            {isSubmitting
                                                                ? translationsData
                                                                      ?.data
                                                                      ?.Göndərilir_
                                                                : translationsData
                                                                      ?.data
                                                                      ?.Göndər}
                                                        </button>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full h-[570px] rounded-xl mt-[20px] iframecantainer"
                        dangerouslySetInnerHTML={{
                            __html: data.iframe,
                        }}
                    ></div>
                </section>
            </main>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Contact;
