import { useState } from "react";
import { Route, useLocation } from "wouter";

import { Number } from "./components/Number";
import image1 from "./images/icon-star.svg";
import { ThanksPage } from "./components/Thanks";

function App() {
  const [, setLocation] = useLocation();
  const [rating, setRating] = useState(0);

  return (
    <div>
      <Route path='/'>
        <div className='w-screen h-screen bg-black/90 grid place-content-center'>
          <article className='bg-sky-950/90 w-96 h-96 rounded-3xl'>
            <div className='w-full h-full p-5 flex flex-col justify-around items-center'>
              <div className='w-11/12'>
                <div className='rounded-full bg-gray-500/25 w-12 h-12 flex justify-center items-center'>
                  <img src={image1} alt='..' />
                </div>
              </div>
              <div className='w-11/12'>
                <p className='text-white text-2xl font-semibold'>
                  How did we do?
                </p>
                <p className='text-sm text-gray-400 font-medium mt-3'>
                  Please let us know how we did with your support request. All
                  feedback is aprecciated to help us improve our offering!
                </p>
              </div>
              <section className='w-11/12 flex justify-between items-center'>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Number
                    key={n}
                    number={n}
                    rating={rating}
                    setRating={setRating}
                  />
                ))}
              </section>
              <button
                className='w-11/12 bg-orange-500 text-white h-10 rounded-full hover:text-orange-500 hover:bg-white duration-200 font-bold'
                onClick={() => setLocation(`/submit/${rating}`)}
              >
                SUBMIT
              </button>
            </div>
          </article>
        </div>
      </Route>
      <Route path='/submit/:rating' component={ThanksPage} />
    </div>
  );
}

export default App;
