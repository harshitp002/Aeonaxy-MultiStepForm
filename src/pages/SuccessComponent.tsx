import React from 'react'

export default  function SuccessComponent () {
    return (
        <>
            <div className=" flex relative h-44" >
                <p className=" bg-yellow-500 rounded-3xl text-black w-28 h-6 text-center text-xs font-semibold p-1 uppercase absolute left-36 ">Most popular</p>
                <div className="flex flex-col  md:flex-row md:space-x-4 h-40 pt-3  ">
                    <div className="flex flex-row space-x-4  rounded-lg w-80 md:w-96 border-[1px] py-6 px-4 mb-4 md:mb-0">
                        <p className="basis-64 font-normal "><span className="font-bold text-base">Foundational Math </span>Build your foundational skills in algebra, geometry, and probability.</p>
                        <img className="basis-36 w-36 h-28 " src="/assets/success/learning_paths.png" alt="learning_paths" />
                    </div>
                    <div className="flex flex-row space-x-4 border-[1px] rounded-lg w-80 md:w-96  py-6 px-4 mb-4 md:mb-0">
                        <p className="basis-64 font-normal "><span className="font-bold text-base">Mathematical Thinking </span>Build your foundational skills in algebra, geometry, and probability.</p>
                        <img className="basis-36 w-36 h-28 " src="/assets/success/learning_paths.png" alt="learning_paths" />
                    </div>

                </div>
            </div>
        </>
    )
}


