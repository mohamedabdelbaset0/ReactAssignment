import React from "react";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HomePanel = ({ dataHandler }) => {

    const changeDataSource = (dataType) => {
        // alert(dataType);
        dataHandler(dataType);
    }
    return (

        <div className="homePage">
            <div className="HomeTitle">Pre-screening Process - Mohamed Abdelbaset</div>
            <div className="contact">
                Contact:
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                <a href="mailto:mohamed.abdelbaset.mahmoud@gmail.com">mohamed.abdelbaset.mahmoud@gmail.com</a>
                <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" />
                <a href="tel:+971502296865">+971502296865</a>
            </div>
            <div className="summary">
                Summary: A react web application to display the Admin panel side menu. Please review the <a rel="noreferrer" target="_blank" href="https://nifty-kare-32d12b.netlify.app/0D27A4DE-2678-482F-828F-F4FD138253AC.jpeg" >screenshot</a>.
            </div>
            <div className="dataSource">
                Change Data Source
                <div>
                <Button variant="contained" color="primary" onClick={() => changeDataSource('data')}>Provided Sample Data </Button>
                <Button variant="contained" color="primary" onClick={() => changeDataSource('screen')}>Screenshot Data </Button>
                </div>
            </div>
        </div>
    )
}

export default HomePanel;