import React, { Component, useEffect, useState } from "react";
import RadialUI from "../components/RadialUI";
import { Modal } from "antd";
const menulists = [
  {
    title: "Add",
    icon: "&#xf055;",
    active: true,
    url: `/add`,
    urlAs: `/add`,
  },
  {
    title: "Edit",
    icon: "&#xf044;",
    url: `/edit`,
    urlAs: `/edit`,
  },
  {
    title: "Delete",
    icon: "&#xf056;",
    url: `#`,
    urlAs: `#`,
    callback: "delete",
  },
  {
    title: "Import",
    icon: "&#xf1c3;",
    url: `/import`,
    urlAs: `/import`,
    callback: "Import",
  },
];
const IndexPage = () => {
  var [actionModal, setActionModal] = useState({
    StateModal: false,
    modalTitle: "",
  });

  const showModal = (modalTitle) => {
    setActionModal({
      StateModal: true,
      modalTitle: modalTitle,
    });
  };

  const hideModal = () => {
    setActionModal({
      StateModal: false,
      modalTitle: "",
    });
  };
  
  return (
    <div>
      <h3>Hello Circular UI</h3>
      
      <Modal
        title={actionModal.modalTitle}
        centered
        visible={actionModal.StateModal}
        onOk={() => hideModal(actionModal.modalTitle)}
        onCancel={() => hideModal(actionModal.modalTitle)}
      >
        <p>Hello, Modal is Opened</p>
      </Modal>
      <RadialUI
        listMenu={menulists}
        position="bottom-right"
        iconColor="#8998BA"
        toggleModal={showModal}
      />
    </div>
  );
};

export default IndexPage;
