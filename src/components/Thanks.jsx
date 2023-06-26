import { useRoute } from "wouter";
import image1 from "../images/illustration-thank-you.svg";

export const ThanksPage = () => {
  const [, params] = useRoute("/submit/:rating");

  return (
    <div className='w-screen h-screen bg-black/90 grid place-content-center'>
      <article className='bg-sky-950/90 w-96 h-96 rounded-3xl'>
        <div className='w-full h-full p-7 flex flex-col justify-around items-center'>
          <div className='w-11/12'>
            <img src={image1} className='mx-auto' alt='..' />
          </div>
          <div className='w-11/12'>
            <div className='w-4/5 h-7 bg-gray-400/20 rounded-full mx-auto flex justify-center items-center text-orange-500'>
              You selected {params.rating} out of 5
            </div>
          </div>
          <div className='w-11/12'>
            <p className='text-white text-2xl font-semibold text-center'>
              Thank you!
            </p>
            <p className='text-sm text-gray-400 font-medium mt-3 text-center'>
              We appreciate you talking the time to give a rating. if you ever
              need more support, don`t hesitate to get in touch!
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
