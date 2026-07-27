import Card from "./Card"



const MainSection = ({ todo}) => {



  return (
    <div className="flex flex-col  items-center  w-[600px] m-auto  h-[500px] overflow-y-auto scrollbar-hidden" >
      {todo.map((item) => {
        return <Card key={item._id} id={item._id} title={item.title} />
      })}

    </div>
  )
}

export default MainSection
