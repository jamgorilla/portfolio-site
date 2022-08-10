

function Card (props) {

    const styles = {
        backgroundColor: props.big ? 'var(--clr-pure-black)' : 'var(--clr-light-grey)',
        color: props.big ? 'var(--clr-pure-white)' : 'var(--clr-pure-black)',
        paddingTop: props.big ? '3rem' : '1.5rem', 
        paddingBottom: props.big ? '3rem' : '1.5rem'
    }
    return (
        <div className="rate-card" style={ styles }>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-content">{ props.content }</p>
            <h2 className="card-price">{ props.period ? props.yearly : props.monthly }</h2>
            <p className="term-period">{ props.period ? 'per year' : 'per month' }</p>
            <button className={`pick-plan-btn ${props.big}` } style={{ 
                backgroundColor: props.big ? 'var(--clr-light-grey)' : 'var(--clr-pure-black)', 
                color: props.big ? 'var(--clr-pure-black)' : 'var(--clr-pure-white)'
                }}><h4>Pick Plan</h4></button>
        </div>
    )
}

export default Card;