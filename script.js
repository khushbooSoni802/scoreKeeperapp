let score=0;
let wicket=0;
let ballResult= [];
let hit = 0;
let inputRef = React.createRef();


function addScore(num){
    hit=num;
    
    rootElement.render(<App/>)
    console.log(ballResult)
    }

function addWicket(){
    hit="w"


    
    rootElement.render(<App/>)
   console.log(ballResult)}

 const ScoreButtons = () =>(
    <div> 
     <button  onClick={()=>addScore(0)}>0</button>
      <button onClick={()=>addScore(1)}>1</button>
     <button  onClick={()=>addScore(2)}>2</button>
     <button  onClick={()=>addScore(3)}>3</button>
     <button  onClick={()=>addScore(4)}>4</button>
     <button  onClick={()=>addScore(5)}>5</button>
     <button  onClick={()=>addScore(6)}>6</button>
     <button onClick={addWicket} >wicket</button>
     
     
     
     
     
     </div>
     

 )
 const Result = ()=> (
    <div>
        {ballResult.map((res,index) =>(
            <>
            {index %6 ===0? <br />: null}
            
            <span key={index}>{res === 0? <strong>.</strong>: res}</span> &nbsp;&nbsp;</>))}

        
    </div>
 )
 function handleSubmit(event){
    event.preventDefault();
    if(hit == "w"){
        wicket += 1;
    }
    else{
        score += hit;
    }
    ballResult.unshift(
       // <span>{hit}{","}{inputRef.current.value}</span>
       <span> {`${hit}, ${inputRef.current.value} `}</span>

    )
    hit=0;
    inputRef.current.value="";
    console.log(inputRef.current.value)
    rootElement.render(<App/>)
 }
 const Form= ()=>(
    <form onSubmit={handleSubmit }>
        <input value={hit} />
    <input ref={inputRef} placeHolder="add comment"/>
        <button> submit</button>
    </form>
 )


const App= () =>  (
    <>
     <h1> score keeper</h1>
     <h2>  score: {score}/{wicket}</h2>
     <ScoreButtons/>
     <br />
    
     <Form/>
     <hr/>
     {ballResult.map((res,index)=>(
        <p key={index}>{res}</p>
     ))}
     
     
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"))
rootElement.render(<App/>)