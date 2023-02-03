import CustomModal from "../../components/CustomModal";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {

  const [openModal, setOpenModal] = useState(false)

  
  return (
    <>
      <div data-testid="dashboard">Dashboard Page</div>
      <button onClick={() => setOpenModal(true)}>Open Model</button>
      <CustomModal show={openModal} onSuccess={() => setOpenModal(false)} onClose={() => setOpenModal(false)}/>
    </>
  );
};

export default DashboardPage;
