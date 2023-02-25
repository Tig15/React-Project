import React from 'react'
import MyCard from './MyCard'
import "./ImageCarousel.css"


export default function ImageCarousel() {
    let box = document.querySelector(".flower-cont")

    const pressprevbtn = ()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }


    const pressnextbtn = ()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    return (
        <div className='flower-carous'>
            <button className="prev-btn rounded" onClick={pressprevbtn}><p>&#8249;</p></button>
            <button className="next-btn rounded" onClick={pressnextbtn}><p>&#8250;</p></button>

            <div className='flower-cont'>
                <MyCard para1="Hepatica is the first “true” wildflower (that is, other than the rather unusual-flowered skunk
                        cabbage) to bloom in the tri-state region. Its lovely flowers are a cheerful indicator that
                        spring has really begun, but they can be surprisingly difficult to spot among the dull brown
                        leaf litter."/>
                <MyCard para2="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois."/>
                <MyCard para3="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois." />
                <MyCard para4="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois." />
                <MyCard para5="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois."/>
                <MyCard para6="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois."/>
                <MyCard para7="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois." />
                <MyCard para8="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois."/>
                <MyCard para9="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois." />
                <MyCard para10="Iris fulva is commonly called copper iris because of the unusual copper color of its flowers.
                        It is a beardless, crestless iris (Louisiana Iris group) that is native to swamps and wetlands
                        of the deep South and of the lower Mississippi Valley from Louisiana north to southeastern
                        Missouri and southern Illinois." />
            </div>
        </div>
    )
}
