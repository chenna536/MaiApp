import React from 'react'
const PriceCard = ({ data }) => {
    return ( 
    <div className="w3-center w3-text-gray" style={{ fontSize: '18px', marginBottom: '1em'}}>
        <p style={{ whiteSpace: "pre-line", fontStyle: 'bold'}} ><b>{data.heading}</b></p>
        <p  style={{
                    marginTop:0,
                }}>{data.text}</p>
        <button
                type="button"
                className="w3-button w3-round-xxlarge w3-text-white"
                style={{
                    width:'100%',
                    margin:0,
                    backgroundColor: data.color
                }}
              >
                <b>{data.price}</b>
              </button>
    </div> );
}
 
export default PriceCard;