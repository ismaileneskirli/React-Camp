import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, friends, age, address }) {
  return (
    <>
      <div>
        {" "}
        {isLoggedIn ? (
          ` Adı : ${name}, Soyadı : ${surname}, Yaşı : ${age}, ${address.title} da yaşıyor. Arkadaşları : ${friends}`
        ) : (
          <h1> Giriş yapmadınız</h1>
        )}
      </div>
    </>
  );
}

// Define restrictive proptypes
User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  address: PropTypes.shape({
    title: PropTypes.string.isRequired,
    zip: PropTypes.string,
  }),
};

User.defaultProps = {
  isLoggedIn: false,
};

export default User;
