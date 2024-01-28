export const parentVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.25,
    },
  },
};

export const verticalChildrenVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const horizontalChildrenVariant = {
  hidden: {
    opacity: 0,
    x: 25 ,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const singleHorizontalVariant = {
  hidden: {
    opacity: 0,
    x: 150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 50,
      delay: 0.4,
    },
  },
};

export const singleVerticalVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 50,
      delay: 0.4,
    },
  },
};