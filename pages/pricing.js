import arrow from '../starter-code/assets/shared/desktop/arrow.svg' 
import Image from 'next/image'
import Link from 'next/link'
import hero from '../starter-code/assets/pricing/desktop/hero.jpg' 
import { useState } from 'react'
import Card from '../components/cards/Card'


function Pricing(props) {

    const [period, setPeriod] = useState(false);

    function togglePeriod(event) {

        const periodClass = event.target.className;

        // if (periodClass === 'yearly-switch') {
        //      console.log(event.target.className)
            setPeriod((prev) => {
                return !prev;
            })
        // } else {
        //     console.log(event.target.className, 'OTHER')

        // }

    }

    return (
        <>
        <div className='section-container'>
        <div className='right-image-container'>

        <Image 
            className='pricing-hero-photographer-picture section-picture'
            src={ hero }  
            layout='responsive' 
            alt="man standing by lake"
            />

        </div>
        <div className='text-box text-box-left black-text-container'>
          <h1>
            Features
          </h1>
          <p>
          We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.
          </p>
        </div>
      </div>

      <div className='toggle-container'>

        <label className='monthly-switch' style={{color: period === false ? "black" : "grey"}} htmlFor='toggle-switch' >Monthly
        </label>

        <label className='switch'>
            <input type="checkbox" name='toggle-switch' onClick={ togglePeriod }></input>
            <span className='slider round'></span>
        </label>

        <label className='yearly-switch' style={{color: period === false ? "grey" : "black"}} htmlFor='toggle-switch'>Yearly
        </label>

      </div>

        <div className='rates-container'>
            { props.card.map(c =>
                <Card 
                title={ c.title } 
                content={ c.content } 
                id={ c.id } 
                key={ c.id }
                monthly={ c.monthly } 
                yearly={ c.yearly } 
                big={ c.big }
                period={ period }
                />
                ) }
        </div>
        </>
    )
}

export async function getStaticProps() {
    // fetch data from an API
  
    const cardsArrayOfObject = [
      {
        title: "Basic",
        content: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
        id: "1",
        monthly: '$19.00',
        yearly: '$190.00',
        big: false
      },{
        title: "Pro",
        content: "More advanced features available. Recommended for photography veterans and professionals.",
        id: "2",
        monthly: '$39.00',
        yearly: '$390.00',
        big: true
     },{
        title: "Business",
        content: "Additional features available such as more detailed metrics. Recommended for business owners.",
        id: "3",
        monthly: '$99.00',
        yearly: '$990.00',
        big: false
      }
    ]
  
    return {
      props: {
        card: cardsArrayOfObject
      }
    }
  }
  

export default Pricing;