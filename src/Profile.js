import './styleavatar.css'
// function Avatar()
// {
//     return(
//         <img
//         className='avatar'
//         width={50}
//         height={50}
//         src="https://i.imgur.com/MK3eW3As.jpg%22"
//         alt="CA2010 for Not found"
//         >
//         </img>
//     )
// }

// export default function Profile()
// {
//     return (<Avatar></Avatar>)
// }

function Avatar({person,size})
{
    return (
        <img
        className='avatar'
        width={size}
        height={size}
        src={person.imgId}
        alt={person.name}
        >
        </img>
    )
}

export default function Profile()
{
 return (
<div>
<Avatar
    size={50}
    person={{
        imgId:"https://i.imgur.com/MK3eW3As.jpg%22",
        name:"Mohamed Nor Dahir"
    }}
    />
   
    <Avatar
    size={80}
    person={{
        imgId:"https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
        name:"Mohamed Nor Dahir"
    }}
    />

</div>
 )   
}