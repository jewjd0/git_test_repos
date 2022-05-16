import React from "react";
import { useState, useEffect } from 'react';
import "../App.css";
import InfiniteScroll from "./infiniteScroll";
import Board from "../testData/infiniteScrollTest.json";


function PInfiniteScroll() {
    //const [data, setData]=useState("");
    const [datas, setDatas] = useState([]);
    const [scrollOptions, setScrollOptions] = useState({
      childLength: 10, // 첫 렌더될 아이템의 개수
      fullHeight: 0, // 총 스크롤의 크기
    });
    //eslint-disable-next-line
    //const [boards,setBoards] = useState([]); 
    
    const initialDatas = require(Board); 
    console.log(initialDatas);

    useEffect(() => {
      console.log(initialDatas);
      setDatas(initialDatas.slice(0, scrollOptions.childLength));
    }, [initialDatas, scrollOptions.childLength]
    );
  
    return (
      <InfiniteScroll
        datas={datas}
        setDatas={setDatas}
        scrollOptions={scrollOptions}
        setScrollOptions={setScrollOptions}
        
      />
    );
  }
  
  export default PInfiniteScroll;