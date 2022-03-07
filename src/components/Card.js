import locationTag from "../images/locationTag.png"

export default function Card(item) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="card-content">
                <div className="location-details">
                    <div className="location">
                        <img src={locationTag} alt="location-tag" className="locationTag" />
                        <h4>{item.location}</h4>
                    </div>
                    <a href={item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{item.title}</h1>
                <div className="card-description">
                    <p>{item.startDate} - {item.endDate}</p>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
}