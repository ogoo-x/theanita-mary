import { useState, useEffect } from 'react'
import './App.css';
import bg from './assets/Grid background.png'
import yts from './assets/stickerszz.svg';
import butterfly from './assets/butterfly.svg';
import counting from './assets/counting.svg';
import background from "./assets/Grid background.png";

function App() {
  const [count, setCount] = useState([]);

  // The Office API fetch. Literal internet gold!
  const fetchPost = async () => {
    const response = await fetch('https://officeapi.akashrajpurohit.com/quote/random');
    const data = await response.json();
    console.log(data)
    setCount(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);


  return (
    <>
      <div className=' min-h-screen' style={{ backgroundImage: `url(${background})` }}>
        {/* <img src={bg} alt="" className=' absolute z-0' /> */}
        {/* Section 1 */}
        <section className='p-9 z-20'>
           <p className='px-6'>Dear AnitaMary,</p>
           <div className='px-6 py-5 card1 mt-3'>
              <p>Happy Birthday Anita. It’s amazing seeing the woman God is shaping you into. 
              <br /> I thank God for you today and also, I thank you. 
              <br /> I thank you for being a good friend & a sister.
              <br /> I thank you for being someone I can talk to freely and relate with.
              <br /> I pray you have a blessed year and hit all the goals you’ve set 💜. 
              May God lead you through all the seasons of your life, filling them with His peace and joy.
              <br /> Amen.
              <br /> Have a wonderful day today love! Happy 21st birthday!. "What? Like it's hard?"😅
              <br /> PS: Below is a selection of some classic "The Office" dialogues. Enjoy!</p>
              <div className='mt-7'>
                <img src={butterfly} alt="" className='ml-5'/>
                <p className='sign'><br /> Yours truly, <br/> Ogochukwu</p>
              </div>  
           </div>
           
        </section>

        {/* Section 2 */}
        <section>
          <img src={yts} alt="" className='h-32' />
        </section>

        {/* Section 3 */}
        <section className='p-9 flex justify-center'>
          <div className='px-6 py-5 card2 max-w-80 flex flex-col justify-center gap-5'>
            <div className='insidee'>
              <img src={count.character_avatar_url} alt={count.character} className='max-w-32 passport'/>
              <p>{count.quote}</p>
            </div>
            
            <button onClick={fetchPost}>Generate</button>
          </div>
        </section>

        {/* Section 4 */}
        <section className=' flex justify-center gap-3 foot mt-4 mb-5'>
          <p>happy</p>
          <img src={counting} alt="" />
          <p>dear</p>
        </section>
      </div>
    </>
  )
}

export default App
