import { useState, useEffect } from "react";
import { ColorRing } from 'react-loader-spinner';
import fetchImages from "api/imagesAPI";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Searchbar from "components/Searchbar/Searchbar";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import Section from "components/Section/Section";
import style from './App.module.css';

export function App() {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
      largeImageURL:'',
      tags:''
  },);

  const onSubmit = (search) => {    
    setImages([]);
    setPage(1);
    setSearch(search);    
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({
      largeImageURL: '',
      tags: '',
    })
  };


  const openModal = (modalContent) => {
    setModalOpen(true);
    setModalContent({
      largeImageURL: modalContent.largeImageURL,
      tags: modalContent.tags,
    });
  }; 
  
  useEffect(() => {

    if (search === "") {
      return;
    };

    const getImages = () => {
      setIsLoading(true);
    
      fetchImages(search, page)
        .then(({ data }) => {
          console.log(data.hits);
          if (data.hits.length === 0) {
            window.alert('No images found');
            return;
          };
          setImages((prevImages) => {            
            return [...prevImages, ...data.hits];
          });
        })
        .catch(newError => {
          console.log("error");
          setError(newError.message);
        })
        .finally(setIsLoading(false));
    };

    getImages();

  }, [page, search]);


  return (
    <div>
      {modalOpen && <Modal largeImageURL={modalContent.largeImageURL} tags={modalContent.tags} onClose={closeModal} />}
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <div className={style.loader}><ColorRing
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                      /></div> }
      {error && <p>"Please try again later..."</p>}
      {images.length > 0 && <Section><ImageGallery images={images} onClick={openModal} /><Button text='Load more' onClick={loadMore} /></Section>}
    </div>
    );
};