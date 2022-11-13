

function IdCard(lastName, firstName, gender, height, birth, picture ){

    return (
        <div className="IdCard -border">
            <img src={picture} alt="profile pic" />
            <div>
            <bold>First name:{firstName}</bold>
            <p>Last name:{lastName} </p>
            <p>Gender: {gender}</p>
            <p>Heigth: {height}</p>
            <p>Birth: {birth}</p>
            </div>
        </div>
    )

}

export default IdCard