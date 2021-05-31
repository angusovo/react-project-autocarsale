import React, {useState, useEffect} from 'react'
import db from "../firebase"
import CardItem from "../Component/CardItem"
import "./Carlist.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Pagination from '@material-ui/lab/Pagination';
import { ButtonGroup, Button } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
function Carlist() {
    const [carlist, setCarlist] = useState([]) 
    const [sortType, setSortType] = useState("timestamp")
    const [isReverse, setIsReverse] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)
    const [searchValue, setSearchValue] = useState("")

    const indexOfLastPost =currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const currentPost = carlist
    .filter((item) => {
        if (searchValue === "") {
            return item
        }
        else if (item.carMake.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
            return item
        }
        else if (item.carModel.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
            return item
        }

        return false

    })
    .map(item => 
        (
            <CardItem
                key={item.id}
                id={item.id}
                src={item.picUrl}
                carMake={item.carMake}
                carModel={item.carModel}
                seat={item.seat}
                price={item.price}
                transmission={item.transmission}
                mileage={item.mileage}
                owner={item.owner}
                cc={item.cc}
                carVeriant={item.carVeriant}
                date={item.timestamp} />
    ))

    const paginationLength = Math.ceil(currentPost.length / postPerPage)


    useEffect(() => {
        db.collection("autocar").doc("sellcar").collection("cars").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setCarlist(snapshot.docs.map(doc=>({
                id:doc.id,
                carMake:doc.data().carMake,
                carModel:doc.data().carModel,
                seat:doc.data().seat,
                transmission:doc.data().transmission,
                mileage:doc.data().mileage,
                price:Number(doc.data().price),
                picUrl:doc.data().picUrl,
                carVeriant:doc.data().carVeriant,
                cc:doc.data().cc,
                owner:doc.data().owner,
                timestamp:doc.data().timestamp,
                // fuel:input.fuel,
                // phone:input.phone                
                // year:input.year,
            })))}    
            ) 
    }, [])

    useEffect(() => {
            const sortArray= type => {
                const sorted = [...carlist].sort((a, b) => a[type] > b[type]? 1 : -1)
                setCarlist(sorted)     
            }
        sortArray(sortType)
        window.scrollTo(0, 0)
       
    }, [sortType, postPerPage])


    const DisplayCarList = currentPost
    .slice(indexOfFirstPost, indexOfLastPost)
    
    const reverseCarlist=()=>{
        setIsReverse(!isReverse)
        setCarlist([...carlist].reverse())
    }

    
    const handleChange =(e) => {
        setSortType(e.target.value)
    }

    const handlePostPerPage = (page)=>{
        setPostPerPage(page)
    }

    const handleSearch = e => {
        setSearchValue(e.target.value)
    }
    return (
        <div className="carlist">
            <div className="carlist-container">
                <div className="car-list-header">
                    <div className="car-list-header-text">
                        <h1>Inventory</h1>
                    </div>
                    <div className="car-list-header-sorting">
                        <p>posts per page:</p>
                        <div className="select-page">
                            <ButtonGroup size="small" aria-label="small outlined button group">
                                <Button 
                                style={postPerPage===8?{background:"#ECECEC"}:null} 
                                onClick={()=>{handlePostPerPage(8)
                                    setCurrentPage(1)}}
                                >8</Button>

                                <Button 
                                style={postPerPage === 12 ? {background: "#ECECEC" } : null}
                                onClick={() =>{handlePostPerPage(12)
                                                setCurrentPage(1)}
                                }>12</Button>
                                
                                <Button 
                                style={postPerPage === 24 ? { background: "#ECECEC" } : null}
                                onClick={() =>{
                                    handlePostPerPage(24)
                                    setCurrentPage(1)
                                    }}>24</Button>

                            </ButtonGroup>
                        </div>
                
                        <p>Sort by:</p>
                        <div className="sorting-container">

                            <select onChange={handleChange}  className="form-select" aria-label="Default select example">
                                <option defaultValue>Open this select menu</option>
                                <option value="price">Price</option>
                                <option value="timestamp">Post date</option>
                                <option value="carModel">Model name</option>
                                <option value="carMake">Car Make name</option>
                                <option value="cc">cc</option>
                            </select>
                            <div className="car-list-reverse-icon" onClick={reverseCarlist}>
                                {isReverse?<ArrowUpwardIcon/>:<ArrowDownwardIcon/>}
                            </div>
                        </div>

                    </div>

                </div>
                
                <div className="search-bar">
                    <div className="search-bar-input">
                        <input placeholder="Search.." onChange={handleSearch} />
                        <SearchRounded />
                    </div>
                </div>

                {currentPost.length === 0 ?
                <div className="empty-result">no result for "{searchValue}", try to change other keywords</div>:
                <ul>{DisplayCarList}</ul>
                }

                <div className="pagination-bar">
                    <Pagination
                        count={paginationLength}
                        color="primary"
                        defaultPage={currentPage}
                        hideNextButton={false}
                        hidePrevButton={false}
                        onChange={(e, value) => { 
                            setCurrentPage(value)
                            window.scrollTo(0, 0)

                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Carlist
