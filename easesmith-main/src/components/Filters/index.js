import './index.css';

const Filters = () => {
    return (
        <div className="filter-sidebar">
            <div className="filter-header">
                <h3>Filter</h3>
                <button className="clear-button">CLEAR ALL</button>
            </div>
            <hr />
            {[
                'Type of Plants',
                'Price',
                'Nursery',
                'Ideal Plants Location',
                'Indoor/ Outdoor',
                'Maintenance',
                'Plant Size',
                'Water Schedule',
                'Color',
                'Seasonal',
                'Light Efficient',

            ].map((filter) => (
                <div key={filter} className="filter-con">
                    <div className="filter-item">
                        <p>{filter}</p>
                        <button className="expand-button">+</button>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Filters;
