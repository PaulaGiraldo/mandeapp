import Select from 'react-select';

const estrellas = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"}
  ];
  
  const FormEstrellas = ()=>{
    <div>
    <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={[]}
        name="estrellas"
        options={estrellas}
    />
    </div>
    
  
  };
  export default FormEstrellas;