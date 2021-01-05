import  React, {useState} from "react";

const Test = () => {
    let [user, setUser] = useState([{
        name: "Vuong"
    }, {
        name: "Nodemy"
    }])
    return (

        <div>
            Hello nha
            { user.map((userItem, index) => {
                return(
                    <div key={index}>
                        <p> Tên Người dung </p>
                        <p> {userItem.name}</p>

                    </div>
                )
                 })
            
        
        
            }
            <button onClick={() => {
                setUser([{
                    name: "Nguyễn Văn Hùng Vương" 
                }])
            }}> click </button>
        </div>

    )
}
export default Test