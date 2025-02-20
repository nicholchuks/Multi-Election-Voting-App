import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UiActions } from "../store/ui-slice";
import { voteActions  } from "../store/vote-slice";
import { useSelector } from "react-redux";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const UpdateElectionModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  //   close add election modal
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const idOfElectionToUpdate = useSelector(state => state?.vote?.idOfElectionToUpdate)
  const token = useSelector((state) => state?.vote?.currentVoter?.token);
  console.log(idOfElectionToUpdate)

  //close update election modal
  const closeModal = () => {
    dispatch(UiActions.closeUpdateElectionModal());
  };


  const fetchElection = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/elections/${idOfElectionToUpdate}`,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const election = await response.data
      setTitle(election.title)
      setDescription(election.description)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchElection()
  }, [])

  const updateElection =  async (e) => {
    e.preventDefault()
    try {
    const electionData = new FormData()
   electionData.set("title", title)
   electionData.set("description", description)
   electionData.set("thumbnail", thumbnail)
     const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/elections/${idOfElectionToUpdate}`, electionData,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      closeModal()
      navigate(0)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <header className="modal__header">
          <h4>Edit Election</h4>
          <button className="modal__close" onClick={closeModal}>
            <IoMdClose />
          </button>
        </header>
        <form onSubmit={updateElection}>
          <div>
            <h6>Election Title:</h6>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h6>Election Description:</h6>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <h6>Election Thumbnail:</h6>
            <input
              type="file"
              name="thumbnail"
              //   value={thumbnail}
              accept="png,jpg,jpeg,webp,avif"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn primary">
            Update Election
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateElectionModal;
