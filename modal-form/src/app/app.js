import './app.scss';
import SubmitForm from "../modal-form/modal-form"
import SubmitSuccess from '../modal-success/modal-success';
import {Fragment} from "react"

function App() {
  return (
    <Fragment>
      <SubmitForm></SubmitForm>
      <SubmitSuccess></SubmitSuccess>
    </Fragment>
  );
}

export default App;
