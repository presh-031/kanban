export type ModalTypes = {
  children: React.ReactElement;
  isVisible: boolean;
};

export type TaskModalTypes = {
  toggleTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NewTaskModalTypes = {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DeleteTaskModalTypes = {
  toggleDeleteTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export type EditTaskModalTypes = {
  toggleEditTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HeaderTypes = {
  isBoardEmpty: boolean;
};
