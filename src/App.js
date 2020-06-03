import React ,{useState} from 'react';


import { Button , Table, Form, FormGroup, Label, Input , Container } from 'reactstrap';

function App() {
  function submitForm(event){
      event.preventDefault();
      const newContact = {id,fName,lName,phone,birthday}
      setContacts([...contacts , newContact]);
      setID("");
  }
  const [contacts , setContacts] = useState([{
    id:1, fName:'ali' , lName:'komij',phone:91212312344 , birthday:new Date()
  },]);
  const[id,setID] = useState([]);
  const[fName,setfName] = useState([]);
  const[lName,setlName] = useState([]);
  const[phone,setphone] = useState([]);
  const[birthday,setbirthday] = useState([]);
  return (
    <div className="App">
      <Container>
      <Table>
        <thead>
          <tr>
            <td style={{width:"25px"}}>#</td>
            <td>first_name</td>
            <td>last_name</td>
            <td>phone</td>
            <td>birthday</td>
          </tr>
        </thead>
        <tbody>
          {console.log(contacts)}
          {contacts.map(contact=>(
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.fName}</td>
              <td>{contact.lName}</td>
              <td>{contact.phone}</td>
              <td>{contact.birthday.toLocaleString()}</td>
            </tr>
          ))}

        </tbody>
      </Table>
      <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="id">id</Label>
        <Input value={id} onChange={(e)=>setID(e.target.value)} type="number" name="id" id="id" placeholder="id" />
      </FormGroup>
      <FormGroup>
        <Label for="fName">first name</Label>
        <Input onChange={(e)=>setfName(e.target.value)} type="text" name="fName" id="fName" placeholder="first name" />
      </FormGroup>
      <FormGroup>
        <Label for="lName">last name</Label>
        <Input value={lName} onChange={(e)=>setlName(e.target.value)} type="text" name="lName" id="lName" placeholder="last name" />
      </FormGroup>
      <FormGroup>
        <Label for="phone">phone</Label>
        <Input onChange={(e)=>setphone(e.target.value)} type="text" name="phone" id="phone" placeholder="phone" />
      </FormGroup>
      <FormGroup>
        <Label for="birthday">birthday</Label>
        <Input onChange={(e)=>setbirthday(e.target.value)} type="text" name="birthday" id="birthday" placeholder="birthday" />
      </FormGroup>
      <Button type='submit' color="primary">save</Button>{' '}
      <Button type='reset' color="secondary">reset</Button>
      </Form>
      </Container>
    </div>
  );
}

export default App;
