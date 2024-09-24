import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {
  let {register, handleSubmit, reset} = useForm();
  let [bmi, setBMI] = useState('The results will appear here !')

  function submitHandler(data) {
    let weight = data.weight;
    let height = data.height;

    let calculatedBMI = (weight/(height*height)).toFixed(1);

    if(calculatedBMI < 18.5)
        setBMI("Underweight")
    else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9)
        setBMI("Normal Weight")
    else if(calculatedBMI >= 25 && calculatedBMI <= 29.9)
        setBMI("Overweight")
    else if(calculatedBMI >=30 && calculatedBMI <= 35)
        setBMI("Obesity")
    else if(calculatedBMI > 35)
        setBMI("Severe obesity")
    else
        setBMI("Not a valid value")
    
    reset();
  }

  return (
    <div>
      <form action="" className='w-[500px] mx-auto mt-20 text-center' onSubmit={handleSubmit(submitHandler)}>
        <h1 class="text-5xl font-bold">BMI Calculator</h1>
        <h1 class="text-3xl font-bold">{bmi}</h1>

        <div class="flex gap-2 mt-3 w-full">
            <input {...register('weight')} type="text" placeholder="Enter Weight in kg" class="w-1/2 px-2 py-3 border border-neutral-300 rounded-xl focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-200 transition" />
            <input {...register('height')} type="text" placeholder="Enter Height in m" class="w-1/2 px-2 py-3 border border-neutral-300 rounded-xl focus:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-200 transition" />
        </div>

        <input className='bg-black text-white px-2 py-3 w-full rounded-lg mt-2' type="submit" value="Calculate BMI" />

      </form>
    </div>
  )
}

export default App
