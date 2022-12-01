import React, {useState, useEffect} from 'react';
import { serchImage } from 'services/image';
import { Audio } from 'react-loader-spinner'
import styles from './app.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from '../shared/Button';
import Modal from 'shared/Modal';

export default function App(){

const [hits, setHits] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [q, setQ] = useState('');
const [page, setPage] = useState(1);
const [modalOpen, setModalOpen] = useState(false);
const [largeImg, setLargeImg] = useState('');

useEffect(()=>{
  if(q === ""){
    return
  };
  const fetchImage = async () =>{
    setLoading(true);

    try{
      const {hits} = await serchImage(q, page)
      setHits(prevSate => [...prevSate, ...hits])
      setLoading(false)
    }catch(error){
      setError(error.message)
      setLoading(false)
    };
  };
  fetchImage();
},[q, page]);

  const handleFormSubmit = ({q})=> {
    setHits([])
    setQ(q)
  };

  const showModal = (img) =>{
    setModalOpen(true);
    setLargeImg(img);
  };
  
  const closeModal = () =>{
    setModalOpen(false)
  };

  const loadMore = () => {
    setPage(prevPage => prevPage +1) 
  };

return (
  <div className={styles.App}>
           <Searchbar onSubmit={handleFormSubmit}/>
           {loading && <Audio
            ariaLabel= "loading"
           />}
           {Boolean(hits.length)&& <ImageGallery hits={hits} addModalImg={showModal}/>}
           {!loading && (hits.length > 0)&& 
          (<div className={styles.btnContainer}>
            <Button onClick={loadMore} text='Load more'/>
          </div>)
          }
          {modalOpen && (
              <Modal close={closeModal}>
                <button type='button' onClick={closeModal}>X</button>
                <img src={largeImg} alt="big photo"/>
              </Modal>
              )}
        </div>
)
};


// export default class App extends Component {
//   state={
//     hits: [],
//     loading: false,
//     error: null,
//     q: '',
//     page: 1,
//     isModalOpen: false,
//     isModalClose: {},
//   };

//   async componentDidUpdate(prevProps, prevState){
//     const {q, page} = this.state;
//     if(q !== prevState.q || page > prevState.page){
//       this.setState({
//         loading: true,
//       });

//       try{
//         const {hits, totalHits}= await serchImage(q, page)
//         this.setState(prevState => {
//           return{
//           hits: [...prevState.hits, ...hits],
//               loading: false,
//               totalHits,
//           }
//         })
//       }catch(error){
//         this.setState({
//           loading: false,
//           error: error.message
//         })
//       };
//     };
//   };

//   loadMore = () => {
//     this.setState(({page}) => {
//         return {
//             page: page + 1
//         };
//     });
// };

//   handleFormSubmit = ({q})=> {
//     this.setState({hits:[], q})
//   };

//   showModal =(isModalClose) =>{
//     this.setState({ 
//       isModalOpen: true,
//       isModalClose,
//     }) 
//   };
//   closeModal = () =>{
//     this.setState({
//       isModalOpen: false,
//     })
//   };
//   render() {
//     const {loading, hits, isModalOpen, isModalClose}= this.state;
//     const {handleFormSubmit, loadMore, showModal,closeModal} = this;

//     return (
//       <div className={styles.App}>
//         <Searchbar onSubmit={handleFormSubmit}/>
//         {loading && <Audio
//           ariaLabel= "loading"
//         />}
//         {Boolean(hits.length)&& <ImageGallery hits={hits} onClick={showModal}/>}
//         {!loading && (hits.length)&& 
//         (<div className={styles.btnContainer}>
//           <Button onClick={loadMore} text='Load more'/>
//         </div>)
//         }
//         {isModalOpen && (
//             <Modal close={closeModal}>
//               <button type='button' onClick={closeModal} >X</button>
//               <img src={isModalClose} alt="big photo"/>
//             </Modal>
//             )}
//       </div>
//     )
//   };
// };
