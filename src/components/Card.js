const Card = ({username, email, id}) => {
    return (
        <div className ="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3">
            <img src={`https://robohash.org/${id}`}
            alt="loading ..." width="220" height="200"/>
            <div>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card
