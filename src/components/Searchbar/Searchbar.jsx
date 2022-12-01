import React,{ useState } from "react";
import styles from './searchbar.module.css';

const Searchbar = ({ q,  onSubmit }) => {
    const [state, setState] = useState({...q});

    const handleChange = ({target}) =>{
        const {name, value} = target;
        setState({
            ...state,
            [name]:value
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({...state});
        setState({...q });
    };

    return(
            <header  className={styles.Searchbar }>
                <form onSubmit={handleSubmit} className={styles.SearchForm }>
                    
                    <button type="submit" className={styles.button}>
                        <span className={styles.label}>Search</span>
                    </button>

                    <input         
                        onChange={handleChange}
                        className={styles.input}
                        name='q'
                        value={q}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
            )       
};
export default Searchbar;
// export default class Searchbar extends Component{
//     state = {
//         q: '',
//     };
//     handleChange = ({target}) =>{
//         const {name, value} = target;
//         this.setState({
//             [name]:value
//         })
//     };
//     handleSubmit = (e) =>{
//         e.preventDefault();
//         this.props.onSubmit({...this.state})
        
//     };
//     render(){
//         const {handleChange, handleSubmit} = this;
//         const {q} = this.state; 
//         return(
//         <header  className={styles.Searchbar }>
//             <form onSubmit={handleSubmit} className={styles.SearchForm }>
                
//                 <button type="submit" className={styles.button}>
//                     <span className={styles.label}>Search</span>
//                 </button>

//                 <input         
//                     onChange={handleChange}
//                     className={styles.input}
//                     name='q'
//                     value={q}
//                     type="text"
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search images and photos"
//                 />
//             </form>
//         </header>
//         )       
//     };
// };