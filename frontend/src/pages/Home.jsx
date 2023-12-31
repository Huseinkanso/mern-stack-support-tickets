import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
        <section className="heading">
            <h1>what doo you need help with</h1>
            <p>please choose from an option below</p>
        </section>
        <Link to='/new-ticket'  className="btn btn-reverse btn-block">
            <FaQuestionCircle/> Create New Ticket 
        </Link>
        <Link to='/tickets'  className="btn btn-reverse btn-block">
            <FaTicketAlt/>view my tickets 
        </Link>
    </>
  )
}

export default Home