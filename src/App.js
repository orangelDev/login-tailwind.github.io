import Form from "./components/Form";

function App() {
  return (
    <div className="flex w-full h-screen" >
     <div className="w-full flex items-center justify-center lg:w-1/2 ">
      <Form />
     </div>
     <div className="hidden lg:flex h-full w- items-center justify-center">
      <img className="align-middle h-auto" src="https://plataforma.zt.ela.cl/ela_n/app-assets/images/pages/login.png" alt="logo"/>
     </div>
    </div>
  );
}

export default App;
