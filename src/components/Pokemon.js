import React, { Component } from 'react'
import './Pokemon.css'


export class Pokemon extends Component {
  
    render() {
        return (
        <div>         
                <div>
                <div className="slide-container">
                    <div className="wrapper">
                        <div className="clash-card barbarian">
                        <div className="clash-card__image clash-card__image--barbarian">
                            <img src={this.props.pokemon.image} alt="barbarian" />
                        </div>
                        <div className="clash-card__level clash-card__level--barbarian">Level 4</div>
                        <div className="clash-card__unit-name">{this.props.pokemon.name}</div>
                        <div className="clash-card__unit-description">
                            It's classification is {this.props.pokemon.classification}
                        </div>

                        <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                            <div className="one-third">
                            <div className="stat">{this.props.pokemon.maxHP}</div>
                            <div className="stat-value">MaxCP</div>
                            </div>

                            <div className="one-third">
                            <div className="stat">{this.props.pokemon.maxCP}</div>
                            <div className="stat-value">MaxHP</div>
                            </div>

                            <div className="one-third no-border">
                            <div className="stat">{this.props.pokemon.maxCP/10}</div>
                            <div className="stat-value">Cost</div>
                            </div>

                        </div>
                        </div>
                    </div>  
                </div> 
                </div> 

        </div>
        )
    }
}

export default Pokemon
