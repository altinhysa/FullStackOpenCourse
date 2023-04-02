const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => {
    const total = sum.reduce((s, p) => {
        
        return s + p.exercises
      }, 0)
    return (
    <p><b> total of {total} exercises </b></p>
    )

}

const Part = ({part}) =>{ 
   
 return (<p key={part.id}>
    {part.name} {part.exercises}
  </p>)
}

const Content = ({ parts }) => 
  <>
  {parts.map(p => 
    <Part
    part={p} key = {p.id}
     />
  )}
     
  </>


const Course = ({course}) => {
    return (
        <>
        <div>  
          <Header course={course[0].name} />
          <Content parts={course[0].parts} />
          <Total sum={course[0].parts} />
        </div>
        <div>  
          <Header course={course[1].name} />
          <Content parts={course[1].parts} />
          <Total sum={course[1].parts} />
        </div>
        </>
      )
}

export default Course