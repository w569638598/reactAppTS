import React from "react";

interface IProps {
    num: number
    onChange?: (n: number) => void
}

// export const CountComp: React.FC<IProps> = (props) => {
//     return (
//         <div>
//             <button onClick={() => {
//                 if(props.onChange){
//                     props.onChange(props.num - 1)
//                 }
//             }}>-</button>
//             <span>{props.num}</span>
//             <button onClick={() => {
//                 if(props.onChange){
//                     props.onChange(props.num + 1)
//                 }
//             }}>+</button>
//         </div>
//     )
// }


interface IState {
    msg: string
    decription: string
}

export class CountComp extends React.Component<IProps, IState> {
    state = {
        msg: '',
        decription: ''
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num - 1)
                    }
                }}>-</button>
                <span>{this.props.num}</span>
                <button onClick={() => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num + 1)
                    }
                }}>+</button>
            </div>
        )
    }
}