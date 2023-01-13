const d = document

const toggleModal = () => {
  const bodyClassList = d.body.classList;

  if (bodyClassList.contains("open")) {
    bodyClassList.remove("open");
    bodyClassList.add("closed");
  } else {
    bodyClassList.remove("closed");
    bodyClassList.add("open");
  }
};
