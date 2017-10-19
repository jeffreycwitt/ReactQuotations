var React = require('react');
var {connect} = require('react-redux');
var uuid = require("node-uuid");
var moment = require("moment");



var actions = require('actions');
import Search from "Search";
import QuotationList from "QuotationList";
import FocusedQuotation from "FocusedQuotation";
import CanonicalQuotation from "CanonicalQuotation";
import CanonicalQuotationList from "CanonicalQuotationList";
import ManifestationQuotationList from "ManifestationQuotationList";
import Paragraph from "Paragraph";
import BarChart from "BarChart";
import Images from "Images";


var TodoApp = React.createClass({
	handleGraph: function(e){
		e.preventDefault();
		var {dispatch} = this.props;
		dispatch(actions.toggleGraphDisplay(this.props.chart.visible));
	},
	render: function(){
		var _this = this
		function barGraphDisplay(){
			if (_this.props.chart.visible){
				return(
					<div className="chart">
						<BarChart size={[500,500]}/>
					</div>
				)
			}
    }
		function imagesDisplay(){
			if (_this.props.images.visible){
				return(
					<Images/>
				)
			}
    }
		function quotationDisplay(){
			if (!_this.props.chart.visible && !_this.props.images.visible){
				return(
					<div>
					<div id="CanonicalQuotationList" className="column2">
						<CanonicalQuotationList/>
					</div>
					<div id="quotationsList" className="column3">
						<QuotationList/>
					</div>
					<div id="ManifestationQuotationsList" className="column4">
						<ManifestationQuotationList/>
					</div>
					<div className="column5">
						<Paragraph/>
						{/* <FocusedQuotation/>
						<CanonicalQuotation/> */}
					</div>
				</div>
				)
			}
    }
		return (
			<div>
				<div className="wrapper">
					<a href="#" onClick={this.handleGraph}>Toggle Historgram</a>
					<div className='search column1'>
						<Search/>
					</div>
					{quotationDisplay()}
					{barGraphDisplay()}
					{imagesDisplay()}

				</div>

			</div>
		)
	}
});

//module.exports = ;
export default connect(
  (state) => {
		return state
	}
)(TodoApp);
