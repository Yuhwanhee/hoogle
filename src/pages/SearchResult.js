import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import convertDate from '../utils/convertDate'
import { Badge, Button, Dropdown, Modal, Nav, Spinner } from 'react-bootstrap'

const SearchResult = () => {

    const { id } = useParams()
    const [post, setPost] = useState({})


    useEffect(() => {
        fetchData()
    }, [id])



    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:9595/get-post-info', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },

                body: JSON.stringify({
                    id: id
                })
            })

            if (response.status === 200) {
                const data = await response.json()
                setPost(data)
            }

        } catch (err) {
            console.log(err)
        }
    }




    return (

        <div style={{ color: 'white' }}>{post.title}
            <div>{post.write}</div>
            <div>{post.path}</div>
            <div>{convertDate(post.date)}</div>
            {post.img && (
                <img src={post.img} />
            )}

            {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => alert('ok')}>Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>


                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>



                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
    </div>*/}


        </div>

    )
}

export default SearchResult