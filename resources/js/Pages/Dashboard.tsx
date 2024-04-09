import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link,useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import axios from "axios";
import InputError from '@/Components/InputError';

import PrimaryButton from '@/Components/PrimaryButton';

import React, { useState, useEffect, FormEventHandler } from 'react';
export default function Dashboard({ auth,result }: PageProps) {
    const [firstVal, setFirstVal] = useState();
    const [newCards, setNewCard] = useState();
    const [secondVal, setSecondVal] = useState();
    const [card, setCard] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const [tillCard, setTillCard] = useState('');
    const [sinceCard, setSinceCard] = useState('');
    const [cvv, setCVV] = useState('');
    const [response, setResponse] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        card: card,
        tillCard: tillCard,
        sinceCard: sinceCard,
        cvv: cvv,
        checkbox: checkbox,
    });
    const row = []
    result.forEach(element => {
        // ...use `element`...
        const cardinformation = element['numberCard'];
        var  cards = cardinformation + '';
        var trailingCharsIntactCount = 4;
        cards = new Array(cards.length - trailingCharsIntactCount + 1).join('*') + cards.slice( -trailingCharsIntactCount);
        element['numberCard'] = cards;
    });

  // str = new Array('') + str.slice( -trailingCharsIntactCount);
    const changeFirstValue = (e: { target: { value: number; }; }) => {
        console.log(e.target.value);
        if (e.target.value) {
            setSecondVal(e.target.value*15 );

}
    }
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('apiPost'));

    };
    const changeSecondValue = (e: { target: { value: number; }; }) => {
        if (e.target.value) {
            setFirstVal(e.target.value);


        }

    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className='bg-white'>
                <div className='background h-fit	 m-auto center'>

                <div className='back center h-fit	  p-12 '>
                        <h1 className='TitleScreen'>Пополнить банковской картой</h1>
                        <p className='mt-6 TitleMarks'>Укажите сумму</p>
                        <input className='Mark'

                            type='number' value={firstVal} onChange={changeFirstValue}></input>
                        <input className='rubMark' type='number' value={secondVal} onChange={changeSecondValue}></input>
                        <div className='container'>
                        <div className='bg-white'>
                            <div className="row flex flex-wrap">
                        {result.map((resu) => {
                            return <div className="cardList pr-2 col-lg-4 mb-lg-0 mb-3">
                            <div className="card p-3">
                    <div className="number">
                        <label className="fw-bold" >  {resu['numberCard']}</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <small><span className="fw-bold">Expiry date:</span><span>{resu['sinceDate']}/{resu['tillDate']}</span></small>
                        <small><span className="fw-bold">Name:</span><span>Kumar</span></small>
                    </div>
                </div>
                </div>

                        })}
    <form onSubmit={handleSubmit}>


<PrimaryButton className="ms-4 PrimaryButton" disabled={processing}>
+
</PrimaryButton>
                                    </form>

                        </div>



                        </div>



                        </div>
                        <div className='flex mt-16'>
                            <div className='cardFirst text-white  ml'>
                                <div className='pl-4 pt-12'>
                                <p className='text-white'>Номер карты</p>
                                <input     value={data.card}
             onChange={(e) => setData('card', e.target.value)} className='inputNumberCard text-black'></input>
                    <InputError message={errors.card} className="errorScreen mt-2" />

                                    <div className='CardInform'>

                                    <p className='text-white'>Действует до</p>
                                    <div className='flex flex-nowrap'>
                                <input    value={data.tillCard}
                                      id="card_first_date"       onChange={(e) => setData('tillCard', e.target.value)} className='cardDate text-black'></input>
                                <p >&nbsp; / &nbsp; </p>

                                        <input  value={data.sinceCard}
            onChange={(e) => setData('sinceCard', e.target.value)}  className='cardDate text-black'></input>

                                        </div>
                                        <InputError message={errors.tillCard} className="errorScreen mt-2" />
                                </div>
                                </div>

                            </div>
                            <div className='cardSecond'>
                                <div className='opacityCard'>
                                </div>
                                <div className='cvvCard h-fit'>

                                <p>CVV/CVC</p>
                                    <input  className='h-8 w-8 ml-1 sm-w-16' value={data.cvv}
                                        onChange={(e) => setData('cvv', e.target.value)} >

                                        </input>
                    <InputError message={errors.cvv} className="errorScreen mt-2" />

                                    <p>три цифры
                                        с обратной стороны карты</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <input className='rounded-md' name='checkbox' type="checkbox"
                            value={data.checkbox}
                            onChange={(e) => setData('checkbox', e.target.value)}
                            ></input>
                            <p className='ml-2'>Запомнить эту карту. Это безопасно.</p>
                        </div>
                        <button type="button" className="mt-4 payButton text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Оплатить</button>

                    </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}
