import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalFilm = (props) => {
  const {
    buttonLabel,
    className,
  } = props;
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [Name, setName] = useState("");
  const [Year, setYear] = useState("");
  const [Rank, setRank] = useState("");
  const [Image, setImage] = useState("");
  const [Film, setFilm] = useState({
    name: '',
    year: '',
    rank: '',
    image: ''
  });


  const handleNameChange = event => {
    setName(event.target.value);
    
  };
  const handleYearChange = event => {
    setYear(event.target.value);
  };
  const handleRankChange = event => {
    setRank(event.target.value);
    
  };
  const handleImageChange = event => {
    setImage(event.target.value);
    
  };
  const handleClick = event => {
    event.preventDefault();
    
    setFilm({
      name: Name,
      year: Year,
      rank: Rank,
      image: Image
    });
    
    setName("");
    setYear("");
    setRank("");
    setImage("");
    props.add(Film);
  };


  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Movie</ModalHeader>
        <ModalBody>
          <input type="text" placeholder="Enter film titile" value={Name} onChange={handleNameChange}/>
          <input type='text' placeholder="year" value={Year} onChange={handleYearChange} />
          <input type='text' placeholder="Rank" value={Rank} onChange={handleRankChange} />
          <input type='text' placeholder="Affiche" value={Image} onChange={handleImageChange} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClick}>Add</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModalFilm;