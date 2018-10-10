import React, { Component } from 'react'



export default class ForecastRow extends Component {

    convertTemp(tmp){
        return((tmp - 32) * (5/9)).toFixed(1)
    }

    getIcon(code){
        var iconMap = {
            1:'storm.png',
            2:'storm.png',
            3:'storm.png',
            4:'storm.png',
            5:'storm.png',
            6:'storm.png',
            7:'storm.png',
            8:'storm.png',
            9:'storm.png',
            10:'rain.png',
            11:'rain.png',
            12:'rain.png',
            13:'snow.png',
            14:'snow.png',
            15:'snow.png',
            16:'snow.png',
            17:'storm.png',
            18:'storm.png',
            19:'storm.png',
            20:'partlycloudy.png',
            21:'partlycloudy.png',
            22:'partlycloudy.png',
            23:'partlycloudy.png',
            24:'partlycloudy.png',
            25:'partlycloudy.png',
            26:'partlycloudy.png',
            27:'partlycloudy.png',
            28:'partlycloudy.png',
            29:'partlycloudy.png',
            30:'partlycloudy.png',
            31:'sun.png',
            32:'sun.png',
            33:'sun.png',
            34:'sun.png',
            35:'sun.png',
            36:'sun.png',
            37:'storm.png',
            38:'storm.png',
            39:'rain.png',
            40:'rain.png',
            41:'snow.png',
            42:'snow.png',
            43:'snow.png',
            44:'snow.png',
            45:'storm.png',
            46:'snow.png',
            47:'storm.png',
        }

        if(iconMap[code] !== ''){
            return(iconMap[code])
        }else{
            return 'sun.png'
        }
    }
    render() {
        return (
            <div className="forecast-row">
                    <div className="day">
                    {this.props.day.day}<br />
                    {this.props.day.date}
                    </div>
                    <div className="day">min {this.convertTemp(this.props.day.low)}</div>
                    <div>max {this.convertTemp(this.props.day.high)}</div>
                    <div className="img"><img src={this.getIcon(this.props.day.code)} width="50" /> {this.props.day.text}</div>
            </div>
        )
    }
}
