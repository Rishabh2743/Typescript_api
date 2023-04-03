import './Note.css';


export default function Note(props: { title: any; description: any; }) {
    return (
    
            <div className='note'>
                <h3> {props.title}</h3>
                <p>{props.description}</p>
            </div>
   
    );

}