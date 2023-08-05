export type ModalTypes = {
  children: React.ReactElement;
  isVisible: boolean;
};

export type TaskModalTypes = {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export type NewTaskModalTypes = {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HeaderTypes = {
  isBoardEmpty: boolean;
};
