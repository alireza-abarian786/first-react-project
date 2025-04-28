import './Client.css'
import Pagination from './Pagination/Pagination'
import ClientLogo from './ClientLogo/ClientLogo'

export default function Client() {
  return (
        <div className="container-clients container-sections">
          <div className="container-clients__images">
            <ClientLogo number="1" />
            <ClientLogo number="2" />
            <ClientLogo number="3" />
            <ClientLogo number="4" />
            <ClientLogo number="5" />
          </div>
          <div className="container-clients__pagination">
            <Pagination></Pagination>
            <Pagination></Pagination>
            <Pagination active={true}></Pagination>
            <Pagination></Pagination>
            <Pagination></Pagination>
            <Pagination></Pagination>
            <Pagination></Pagination>
            <Pagination></Pagination>
          </div>
        </div>
  )
}

