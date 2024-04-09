import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function () {
    const [firstVal, setFirstVal] = useState();
    const [secondVal, setSecondVal] = useState();
    const changeFirstValue = (e: { target: { value: number; }; }) => {
        console.log(e.target.value);
        if (e.target.value) {
            setSecondVal(e.target.value*15 );

}
    }

    const changeSecondValue = (e: { target: { value: number; }; }) => {
        if (e.target.value) {
            setFirstVal(e.target.value);


}
    }
    return (
        <>
        <Head title="Welcome" />

            <div>
                <div className='background m-auto center'>

                <div className='back center m-6 '>
                        <h1 className='m-6 '>Пополнить банковской картой</h1>
                        <p className='mt-6 ml-6'>Укажите сумму</p>
                        <input  type='number' value={firstVal} onChange={changeFirstValue}></input>
                        <input  type='number' value={secondVal} onChange={changeSecondValue}></input>
                        <div className='flex flex-nowrap mt-4'>

                        <div className='box text-white '>
                            <p>*** 1392
                                <br />
                                12/23
                            </p>
                        </div>
                            <div className='box2 ml-2'></div>
                        </div>
                        <div className='flex mt-16'>
                            <div className='cardFirst text-white  ml-4'>
                                <div className='pl-4 pt-12'>

                                <p>Номер карты</p>
                                <input className='inputNumberCard'></input>
                                <div className='CardInform'>

                                    <p>Действует до</p>
                                    <div className='flex flex-nowrap'>

                                <input className='cardDate'></input>
                                <p>/</p>
                                        <input className='cardDate'></input>
                                    </div>

                                </div>
                                </div>

                            </div>
                            <div className='cardSecond'>
                                <div className='opacityCard'>
                                    <p>CVV/CVC</p>
                                    <input></input>
                                    <p>три цифры
                                        с обратной стороны карты</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox"></input>
                            <p>Запомнить эту карту. Это безопасно.</p>
                            </div>
                    </div>
                </div>

            </div>
        </>

    );
}
