/**
 * Component - Card
 * MaterializeCSS Card component
 * @see {@link https://materializecss.com/cards.html | Card}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * Import components
 */
import Row from "../app-row/Row";
import Column from "../app-column/Column";
import Icon from "../app-icon/Icon";

/**
 * @class
 * @name Card
 * @description MaterializeCSS Card Component.
 * @extends Component
 */
class Card extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            bgColor: config.bgColor || " ",
            textColor: config.textColor || " ",
            title: config.title || " ",
            size: config.size || {},
            cardAction: config.cardAction || null,
            cardReveal: config.cardReveal || null
         }
      };
   }

   render() {
      let cardContent = this.props.children;
      return (
         <Row>
            <Column
               small={this.state.options.size.small}
               medium={this.state.options.size.medium}
               large={this.state.options.size.large}>
               <div className={`card ${this.state.options.bgColor}`}>
                  <div className="card-image">
                     <img src="https://picsum.photos/100/100/?random" />
                     <span className="card-title">{this.state.options.title}</span>
                     <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <Icon icon="add" />
                     </a>
                  </div>

                  <div className={`card-content ${this.state.options.textColor}`}>
                     <span className="card-title activator">
                        <Icon align="left" icon="menu" />
                        {this.state.options.title}
                        <Icon align="right" icon="more_vert" />
                     </span>
                     <p>{cardContent}</p>
                  </div>
                  {this.state.options.cardAction}
                  {this.state.options.cardReveal}
               </div>
            </Column>
         </Row>
      );
   }
}
export default Card;
