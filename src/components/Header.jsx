function Header(props){
    return(
        <div>
              <h1 className="font-semibold text-3xl">Hello {props.name}</h1>
              <p>I will help you manage your Activities:)</p>

        </div>
    )
}

export default Header