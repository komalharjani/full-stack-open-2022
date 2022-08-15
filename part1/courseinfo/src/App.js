const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

    return (
      <div>
        <Header course={course} />
        {/* <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
        <Total  exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/> */}
      </div>
    )
  }


//Step 1
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}.
      </h1>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

//Step 2

const Content = (props) => {
  return (
    <p>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />

    </p>
  )
}
const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}
export default App