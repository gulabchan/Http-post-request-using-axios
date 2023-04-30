import PostForm from "./components/PostForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PostForm />
      <h1>Http post request</h1>
      <h2>
        "This code defines a PostForm component in React that allows users to
        submit a post with a userId, title, and body by making a POST request to
        a dummy REST AP I endpoint using the axios library. The component has a
        constructor that sets the initial state of the component to empty
        strings for userId, title, body, and successMessage. The changeHandler
        method is defined to handle changes in the input fields and update the
        corresponding state property. The submitHandler method is defined to
        handle the form submission. When the form is submitted, it prevents the
        default behavior of the browser and sends a POST request to the API
        endpoint with the current state of the component. If the request is
        successful, a success message is set in the component state. If there is
        an error, an error message is set in the component state. In the render
        method, the component renders a form with input fields for userId,
        title, and body, and a submit button. When the successMessage state
        property is set, it is rendered in a div below the form."
      </h2>
    </div>
  );
}
