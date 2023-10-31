const FormControl = () => {
  return (
    <div className="FormControl">
      <label htmlFor="name">
        이름<span className="required">*</span>
      </label>
      <input id="name" />
    </div>
  )
}

export default FormControl