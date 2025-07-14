function AnchorBtn({ Text, classPosition }) {
  return (
    <div className={`${classPosition} btn-container`}>
      <a href="#">{Text} </a>
    </div>
  );
}
export default AnchorBtn;
