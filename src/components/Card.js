import React from 'react'
import './Card.scss'

class Card extends React.Component  {

    constructor() {
		super();
		this.state = {
            selected: false,
            hovered: false
        }
        this.selectCard = this.selectCard.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    selectCard() {
        this.setState({selected : !this.state.selected})
    }

    mouseEnter() {
        if (this.state.selected === true) {
            this.setState({hovered: true})
        }
    }

    mouseLeave() {
        this.setState({hovered: false})
    }

    render() {
        const option = this.props.options.map(option => <li key={option} className="card__option">{option}</li>);
        return (
            <div className='card-wrap'>
                <div className={this.props.disabled ? 'card disabled' : this.state.selected ? 'card selected' : 'card'} 
                    onClick={this.selectCard} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                        
                    {this.state.selected && this.state.hovered ? (
                        <span className="card__title--small pink">Котэ не одобряет?</span>
                        ) : (
                            <span className="card__title--small">Сказочное заморское яство</span>
                        )
                    }
                    
                    <h2 className="card__title">Нямушка</h2>
                    <span className="card__name">{this.props.name}</span>
                    <ul className="card__options">{option}</ul>
                    <div className="card__img">
                        <img src={require('../images/cat.png')} alt="cat" className="card__pic"></img>
                    </div>
                    <div className="card__weight"><p>{this.props.weight}</p><span>КГ</span></div>
                </div>
                {this.props.disabled ? (
                    <p className="card__description yellow">Печалька, {this.props.name} закончился.</p>
                    ) :
                    !this.state.selected ? (
                    <p className="card__description">Чего сидишь? Порадуй котэ, <span className="card__buy" onClick={this.selectCard}>купи.</span></p>
                    ) : (
                        <p className="card__description">{this.props.description}</p>
                    )
                }
            </div>
        )
    }

}

export default Card;