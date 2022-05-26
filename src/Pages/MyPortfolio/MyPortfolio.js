import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='p-10'>
            <div class="card w-full px-10 bg-base-100 shadow-xl mt-6 mb-10">
            <h2 className='text-3xl text-center font-bold text-purple-400'>My Portfolio</h2>
                <div class="card-body mx-auto">
                    <h2 class="text-center text-emerald-400 text-2xl font-bold">This is Amir Hossain</h2>
                    <p className='text-center mb-5'>My email address is <span className='text-orange-800'>amirhossain.cse@gmail.com</span></p>
                    <h2 className='text-2xl font-bold text-teal-800'>✅ Educational Background:</h2>
                    <div className='ml-5 mb-5'>
                        <p>💠 I have completed my graduation from the department of C.S.E from Metropolitan University, Bangladesh in the year of 2022 with Grade-(A-).</p>
                        <p>💠 I have completed my Higher Secondary Certificate (H.S.C) from the department of science group from Sreemangal Govt. College in the year of 2017 with Grade-(A)</p>
                        <p>💠 I have completed my Secondary School Certificate (S.S.C) from the department of science group from Victoria High School Sreemangal in the year of 2015 with Grade-(A)</p>
                    </div>

                    <h2 className='text-2xl font-bold text-teal-800'>✅ List of technology or skills:</h2>
                    <div className='mx-5 mb-5'>
                        <h2 className='font-bold text-xl'>HTML5</h2>
                        <progress class="progress progress-success min-w-full h-3" value="90" max="100"></progress>
                        <h2 className='font-bold text-xl'>CSS3</h2>
                        <progress class="progress progress-primary min-w-full h-3" value="80" max="100"></progress>
                        <h2 className='font-bold text-xl'>Java Script</h2>
                        <progress class="progress progress-secondary min-w-full h-3" value="70" max="100"></progress>
                        <h2 className='font-bold text-xl'>React</h2>
                        <progress class="progress progress-error min-w-full h-3" value="50" max="100"></progress>
                        <h2 className='font-bold text-xl'>Node</h2>
                        <progress class="progress progress-accent min-w-full h-3" value="40" max="100"></progress>
                        <h2 className='font-bold text-xl'>Mongo DB</h2>
                        <progress class="progress progress-warning min-w-full h-3" value="30" max="100"></progress>
                    </div>
                    <h2 className='text-2xl font-bold text-teal-800'>✅ Live website link of my three project:</h2>
                    <div className='ml-5 mb-5'>
                        <a href="https://fruits-warehouse-b2603.web.app" target="_blank" rel="noopener noreferrer">🔸 Fruits Warehouse Project</a><br />
                        
                        <a href="https://meek-bonbon-545df3.netlify.app/" target="_blank" rel="noopener noreferrer">🔸 Wild Photography Project</a><br />
                        
                        <a href="https://heroic-granita-cd0a71.netlify.app/" target="_blank" rel="noopener noreferrer">🔸 Laptop Reviewer Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;