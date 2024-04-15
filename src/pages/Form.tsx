"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Page1 from '@/src/components/FormPage_1_2/FormPage1/Page1';
import Page2 from '@/src/components/FormPage_1_2/FormPage2/Page2';
import Page3 from '@/src/components/FormPage3/Page3';
import Page4 from '@/src/components/FormPage4/Page4';
import Page5 from '@/src/components/FormPage5/Page5';
import { FiChevronLeft } from "react-icons/fi";


export default function Form() {
    const [step, setStep] = useState(1);
    const router = useRouter();
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const nextStep = () => {
        if (step === 5) {
            router.push('/Success');
        } else {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Page1 />;
            case 2:
                return <Page2 />;
            case 3:
                return <Page3 />;
            case 4:
                return <Page4 />;
            case 5:
                return <Page5 />;
            case 6:
                return;
            default:
                return null;
        }
    };

    const progress = ((step) / 6) * 100;


    const continueButtonBgColor = isButtonClicked || selectedPostId !== null ? 'bg-black/10' : 'bg-black';

    return (
        <div className="flex flex-col items-center  text-center my-10 mx-6  md:mx-40 ">
            <div className="w-full flex justify-between items-center ">
                {step !== 1 && <button onClick={prevStep}><FiChevronLeft className='font-thin text-3xl mr-1 ' /></button>}
                <div className="w-full bg-gray-200 h-1 rounded-full">
                    <div className="bg-emerald-600/95 h-full  rounded-s-full" style={{ width: `${progress}%` }} />
                </div>
            </div>
            {renderStep()}
            {step !== 6 && <button
                className={` w-44 h-12 mt-12 md:mt-3 rounded-md font-normal text-white text-lg ${continueButtonBgColor} `} onClick={nextStep}>Continue</button>}

        </div>
    );
};

