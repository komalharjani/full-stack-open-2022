const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


    return (
      <div>
        <Header course={course} />
        <Content parts={parts}/>
        <Total  parts={parts}/>
      </div>
    )
  }
  export default App

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
      <p>Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <p>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </p>
  )
}
const Part = (props) => {
  return(
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

