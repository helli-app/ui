import Button from "components/button/Button";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import { Container } from "../components/container/Container";

const Helli = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container id="demo">
      <h2>Headers</h2>
      <div id="headers">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
      </div>
      <hr />
      <h2>Buttons</h2>
      <div id="buttons" className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="danger">Danger</Button>
        <Button type="dark">Dark</Button>
      </div>
      <hr />
      <h2>Modals</h2>
      <Button onClick={() => setModalOpen(!modalOpen)}>Toggle modal</Button>
      <Modal id="modals" open={modalOpen} setOpen={setModalOpen}>
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Body>This is the modal body.</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalOpen(false)}>OK</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Helli;
