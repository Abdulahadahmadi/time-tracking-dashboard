import React from 'react'
import data from '../data.json'
import Image from 'next/image'
import Link from 'next/link'

function Dashboard() {


    let selected = data.find(item => item.id === 1)
    let selected2 = data.find(item => item.id === 2)
    let selected3 = data.find(item => item.id === 3)
    let selected4 = data.find(item => item.id === 4)
    let selected5 = data.find(item => item.id === 5)
    let selected6 = data.find(item => item.id === 6)
    
    
    // let selected = data.map(items => items === items.id === items.id ? title : null)
    

    
    return (
        <div className='container mx-auto flex flex-col  my-12 px-6'>
            <div className=''>
                {/* start of profile */}
                    <div className='  justify-center overflow-hidden text-white md:p44 '>
                        <div className='py-12 px-8  flex flex-row justify-centertext-white bg-violet-800 rounded-lg shadow-xl
                        '>
                            <Image className='' src='/images/image-jeremy.png' alt='profile-image' width={50} height={50}/>
                            <div className='px-4 justify-start'>
                                <p className='text-xs'>Reported for</p>
                                <h2 className='text-xl'>jeremy Robson</h2>
                            </div>
                        </div>
        
                        <div className='px-4 bg-blue-900 rounded-b-lg text-sm '>
                            <ul className='flex justify-center'>
                                <li key={data} className='px-3 py-7 text-white'><Link href='#home'><a className='hover:font-extrabold hover:text-xl md:animate-pulse' >Daily</a></Link></li>
                                <li key={data} className='px-4 py-7 text-white'><Link href='#home'><a className='hover:font-extrabold hover:text-xl md:animate-pulse' >Weekly</a></Link></li>
                                <li key={data} className='px-4 py-7 text-white'><Link href='#home'><a className='hover:font-extrabold hover:text-xl md:animate-pulse'>Monthly</a></Link></li>
                            </ul>
                        </div>
                    </div>
                {/* end of profile */}

            <div className='grid md:grid-cols-3 md:gap-6'>
                <div className='mt-10 shadow-xl relative '>
                    <div className='bg-orange-400 rounded-t-xl'>
                        <Image className='animate-bounce absolute ' src='/images/icon-work.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {selected.title} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>{selected.timeframes.weekly.current} hrs</span>
                            <span className='text-white opacity-60'>Last Week-{selected.timeframes.weekly.previous} </span>
                        </div>
                    </div>
                </div>

                <div className='mt-10 shadow-xl relative'>
                    <div className='bg-sky-400 rounded-t-xl  '>
                        <Image className='animate-bounce opacity-40  float-right' src='/images/icon-play.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {selected2.title} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>{selected2.timeframes.weekly.current} hrs</span>
                            <span className='text-white opacity-60'>Last Week-{selected2.timeframes.weekly.previous}hrs</span>
                        </div>
                    </div>
                </div>
                
                <div className='mt-10 shadow-xl relative'>
                    <div className='bg-red-400 rounded-t-xl'>
                        <Image className='animate-bounce opacity-40 ' src='/images/icon-study.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {selected3.title} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>{selected3.timeframes.weekly.current} hrs</span>
                            <span className='text-white opacity-60'>Last Week-{selected3.timeframes.weekly.previous} hrs</span>
                        </div>
                    </div>
                </div>
                
                <div className='mt-10 shadow-xl '>
                    <div className='bg-green-400 rounded-t-xl'>
                        <Image className='animate-bounce opacity-40 ' src='/images/icon-exercise.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {selected4.title} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>{selected4.timeframes.weekly.current} hrs</span>
                            <span className='text-white opacity-60'>Last Week-{selected.timeframes.weekly.previous} hrs</span>
                        </div>
                    </div>
                </div>

                <div className='mt-10 shadow-xl'>
                    <div className='bg-violet-600 rounded-t-xl'>
                        <Image className='animate-bounce opacity-40' src='/images/icon-social.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {selected5.title} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>{selected5.timeframes.weekly.current} hrs</span>
                            <span className='text-white opacity-60'>Last Week-{selected5.timeframes.weekly.previous} hrs</span>
                        </div>
                    </div>
                </div>

                <div className='mt-10 shadow-xl '>
                    <div className='bg-yellow-300 rounded-t-xl'>
                        <Image className='animate-bounce opacity-40 ' src='/images/icon-self-care.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {selected6.title} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>{selected6.timeframes.weekly.current} hrs</span>
                            <span className='text-white opacity-60'>Last Week-{selected.timeframes.weekly.previous} hrs</span>
                        </div>
                    </div>
                </div>      
                </div>
            </div>
        </div>
    )
}

export default Dashboard