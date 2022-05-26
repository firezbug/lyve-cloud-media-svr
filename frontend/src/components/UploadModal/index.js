import React, { useRef } from 'react';
import { Modal } from 'reactstrap';
import VideoUploader from '../VideoUploader';
import './styles.scss';

export default function UploadModal(props) {
  const { toggle, isOpen } = props;
  const videoUploader = useRef(() => {});
  return (
    <Modal isOpen={isOpen} toggl={toggle} className="upload-modal">
      <div>
        <h3>Upload Video</h3>
      </div>
      <VideoUploader
        uploadVideoTrigger={videoUploader}
        toggle={() => toggle()}
      />
      <div className="button-wrapper">
        <button className="cancel-button" onClick={toggle}>
          Cancel
        </button>
        <button className="main-button" onClick={() => videoUploader.current()}>
          Upload
        </button>
      </div>
    </Modal>
  );
}
