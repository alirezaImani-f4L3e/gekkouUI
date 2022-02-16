const Selectcomponent = ({ items, callback }) => {
  const presentedItems = items?.map((item, index) => (
    <option value={index} key={index} defaultValue={0}>
      {item}
    </option>
  ));
  return (
    <select className="form-control" onChange={callback}>
      {presentedItems}
    </select>
  );
};

export default Selectcomponent;
