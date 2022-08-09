import Image from 'next/image'
import check from '../../public/assets/pricing/desktop/check.svg'
//import { useState } from 'react'


function Compare (props) {

    return (
        <>
        <div className="compare-table-row">
            <h4 className="compare-subtitle">{props.title}</h4>
            <div className='basic-pro-biz-container'>
                <h5>Basic</h5>
                <h5>Pro</h5>
                <h5>Business</h5>

            </div>

            { props.ticks.map(t => 
                <Image 
                className="tick"
                style={{ opacity: t ? '1': '0'}}
                src={check}
                key={ t.key }
                height='15px'
                width='18px'
                alt="tick"
                />
                ) }
                <div className='tick-list'>
                { props.ticks.map(t => 
                <Image 
                className="tick-mobile"
                style={{ opacity: t ? '1': '0'}}
                src={check}
                key={ t.key }
                height='15px'
                width='18px'
                alt="tick"
                />
                ) }
             </div>
        </div>
            <hr className='compare-hr-grey'></hr>
        </>
    )
}

export default Compare;