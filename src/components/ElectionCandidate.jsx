import React from "react";
import { IoMdTrash } from "react-icons/io";
import axios from "axios"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ElectionCandidate = ({ fullName, motto, image, _id:id }) => {

  const navigate = useNavigate()

  const token = useSelector(state => state?.vote?.currentVoter?.token)

const deleteCandidate = async () => {
  try {
     const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/candidates/${id}`,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
navigate(0)
  } catch (error) {
    console.log(error)
  }
}
  return (
    <li className="electionCandidate">
      <div className="electionCandidate__image">
        <img src={image} alt={fullName} />
      </div>
      <div>
        <h5>{fullName}</h5>
        <small>
          {motto?.length > 70 ? motto.substring(0, 70) + "..." : motto}
        </small>
        <button className="electionCandidate__btn" onClick={deleteCandidate}>
          <IoMdTrash />
        </button>
      </div>
    </li>
  );
};

export default ElectionCandidate;
