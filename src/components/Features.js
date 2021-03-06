import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import './Cards/Cards.css'

const FeatureGrid = ({ gridItems }) => {
  console.log(gridItems)
  return (
    <div className="columns is-multiline">
      {gridItems.map((item) => (
        <div key={item.text} className="column is-6 cardContainer">
          <section className="section">
            <div className="has-text-centered">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
              <div><h3>{item.heading}</h3></div>
            </div>
              <p>{item.text}</p>
              
          </section>
        </div>
      ))}
    </div>
  )
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      heading:PropTypes.string,
    })
  ),
}

export default FeatureGrid
