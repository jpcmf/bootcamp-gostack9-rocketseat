import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdClose } from 'react-icons/md';

import { Card } from './styles';

// import { Container } from './styles';

export default function ConfirmAlert({
  callback,
  onClose,
  title,
  message,
  onlyConfirmButton,
  confirmButtonText,
  cancelButtonText,
  showButtons,
}) {
  return (
    <Card onlyConfirmButton={onlyConfirmButton}>
      <h1>{title}</h1>
      {typeof message === 'object' ? message : <p>{message}</p>}

      {showButtons && (
        <div>
          {!onlyConfirmButton && (
            <button
              type="button"
              onClick={onClose}
              // icon={MdClose}
              // text={cancelButtonText}
            >
              <MdClose />
              NÃO
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              if (callback) callback();

              onClose();
            }}
            // icon={MdCheck}
            // text={confirmButtonText}
          >
            <MdCheck />
            SIM
          </button>
        </div>
      )}
    </Card>
  );
}

ConfirmAlert.propTypes = {
  callback: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onlyConfirmButton: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  showButtons: PropTypes.bool,
};

ConfirmAlert.defaultProps = {
  callback: null,
  title: 'Você está certo disso?',
  message: 'Você deseja confirmar esta ação?',
  onlyConfirmButton: false,
  confirmButtonText: 'SIM',
  cancelButtonText: 'NÃO',
  showButtons: true,
};
