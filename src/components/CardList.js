import Card from "./Card"

const CardList = ({ robots }) => {
  if (true) {
    throw new Error('Something\'s not good')
  }
    return(
        <div>
            {
              robots.map((el, i)=> {
                return (
                    <Card key={i} 
                    id={robots[i].id} 
                    username={robots[i].name} 
                    email={robots[i].email}/>
                )
              })
            }
        </div>
    ) 
}
export default CardList