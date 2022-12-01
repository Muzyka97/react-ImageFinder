import React,{ useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({close, children}) =>{

    useEffect(()=>{
        document.addEventListener("keydown",closeModal)
        return () =>{
            document.removeEventListener("keydown",closeModal)
        }
    },[]);

    const closeModal =(e) =>{

        if(e.code === "Escape"){
            close()
            return
        }
        if(e.target === e.currentTarget){
            close()
        }
    };
    
    return createPortal(
                    <div className={styles.Overlay} onClick={closeModal}>
                    <div className={styles.Modal}>
                       {children}
                    </div>
                  </div>,
                  modalRoot
                )
};
export default Modal;

// class Modal extends Component{
//     componentDidMount(){
//         document.addEventListener("keydown",this.closeModal)
//     };
//     componentWillMount(){
//         document.removeEventListener("keydown",this.closeModal)
//     };
//     closeModal =(e) =>{
//         const {close} = this.props

//         if(e.code === "Escape"){
//             close()
//             return
//         }
//         if(e.target === e.currentTarget){
//             close()
//         }
//     };
//     render(){
//         const {closeModal} = this
//         const {children}= this.props;
//         return createPortal(
//             <div className={styles.Overlay} onClick={closeModal}>
//             <div className={styles.Modal}>
//                {children}
//             </div>
//           </div>,
//           modalRoot
//         )
//     }
// };
// export default Modal;