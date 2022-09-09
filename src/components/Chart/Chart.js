
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    const datPointVals = props.dataPoints.map(data => data.value);
    const maxVal = Math.max(...datPointVals);
    return (<div className='chart'>
        {props.dataPoints.map((data) => (
            <ChartBar 
            key = {data.label}
            value ={data.value}
            maxVal={maxVal}
            label = {data.label}
            />
        ))}
    </div>
    );

};

export default Chart;