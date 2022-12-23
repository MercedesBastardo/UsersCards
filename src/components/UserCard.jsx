const UserCard = ({users, color}) => {
    const {name, location, email, phone, picture} = users
  
      return (
        <div className="card" style={ { color: color } }>
          <div className="title">
          <h1> {`${ name.title } ${name.first} ${name.last}`} </h1>
          <img src= { picture.large } alt="" />
          </div>
          <div className="data">
          <div className="email">
              <i class="fa-solid fa-envelope"></i>
              <p>{email}</p>
          </div>
          <div className="telephone">
              <i class="fa-solid fa-phone"></i>
              <p>{phone}</p>
          </div>
              <div className="location">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>{`${ location.country } ${location.state} ${location.city}`}</p>
              </div>
          </div>
        </div>
      )
  }
  export default UserCard