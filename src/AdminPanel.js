import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// import Divider from "@material-ui/core/Divider";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
const MenuItem = ({ item, isMain }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenText, setIsOpenText] = useState("▼");

    const handleClick = () => {
        setIsOpen(!isOpen);
        !isOpen ? setIsOpenText("▲") : setIsOpenText("▼");
    };

    return (
        <li className={(isMain ? 'section' : 'child')}>
            {(
                <>
                    <div className={(isMain ? 'section-title' : 'section-subtitle')}>
                        <div className="inlineblock left">
                            <input
                                type="checkbox"
                                // className={(isOpen?"check":"uncheck")}
                                className="checkbox"
                                checked={isOpen}
                                onChange={handleClick}
                                id={item.key}
                            />
                            <a target="_blank" rel="noreferrer" href={item.url}>{item.label}</a>
                        </div>
                        <div className="inlineblock right">{item.nodes !== undefined && item.nodes.length > 0 && (
                            <label htmlFor={item.key}>{isOpenText}</label>)}</div>
                    </div>
                    {isOpen && item.nodes !== undefined && item.nodes.length > 0 && (
                        <ul>
                            {item.nodes.map((node) => (
                                <MenuItem key={node.key} item={node} />
                            ))}
                        </ul>
                    )}
                </>
            )}
        </li>
    );
};

const SideMenu = ({ data }) => {
    return (
        <ul>
            {data.map((item) => (
                <><MenuItem key={item.key} item={item} isMain={true} /></>
            ))}
        </ul>
    );
};

const AdminPanel = ({ dataType }) => {
    const data = [
        {
            "key": "mammal",
            "label": "Mammal",
            "nodes": [
                {
                    "key": "canidae",
                    "label": "Canidae",
                    "nodes": [
                        {
                            "key": "dog",
                            "label": "Dog",
                            "nodes": [],
                            "url": "https://www.google.com/search?q=dog"
                        },
                        {
                            "key": "fox",
                            "label": "Fox",
                            "nodes": [],
                            "url": "https://www.google.com/search?q=fox"
                        },
                        {
                            "key": "wolf",
                            "label": "Wolf",
                            "nodes": [],
                            "url": "https://www.google.com/search?q=wolf"
                        }
                    ],
                    "url": "https://www.google.com/search?q=canidae"
                }
            ],
            "url": "https://www.google.com/search?q=mammal"
        },
        {
            "key": "reptile",
            "label": "Reptile",
            "nodes": [
                {
                    "key": "squamata",
                    "label": "Squamata",
                    "nodes": [
                        {
                            "key": "lizard",
                            "label": "Lizard",
                            "url": "https://www.google.com/search?q=lizard"
                        },
                        {
                            "key": "snake",
                            "label": "Snake",
                            "url": "https://www.google.com/search?q=snake"
                        },
                        {
                            "key": "gekko",
                            "label": "Gekko",
                            "url": "https://www.google.com/search?q=gekko"
                        }
                    ],
                    "url": "https://www.google.com/search?q=squamata"
                }
            ],
            "url": "https://www.google.com/search?q=reptile"
        }
    ];
    const screenData = [
        {
            "key": "poi",
            "label": "Point of Interest",
            "nodes": [
                {
                    "key": "districts",
                    "label": "Districts",
                    "url": "https://www.google.com/search?q=Districts"
                },
                {
                    "key": "schools",
                    "label": "Schools",
                    "url": "https://www.google.com/search?q=Schools"
                },
                {
                    "key": "capex",
                    "label": "Capex Projects",
                    "url": "https://www.google.com/search?q=Capex Projects"
                }
            ],
            "url": "https://www.google.com/search?q=Point%20of%20Interest"
        },
        {
            "key": "challenges",
            "label": "Challenges",
            "nodes": [
                {
                    "key": "2022",
                    "label": "2022",
                    "nodes": [
                        {
                            "key": "highways",
                            "label": "Highways",
                            "nodes": [
                                {
                                    "key": "morningCongestion",
                                    "label": "Morning congestion",
                                    "url": "https://www.google.com/search?q=morning%20Congestion"
                                },
                                {
                                    "key": "eveningCongestion",
                                    "label": "Evening congestion",
                                    "url": "https://www.google.com/search?q=evening%20Congestion"
                                }
                            ],
                            "url": "https://www.google.com/search?q=highways"
                        },
                        {
                            "key": "junctions",
                            "label": "Junctions",
                            "url": "https://www.google.com/search?q=junctions"
                        },
                        {
                            "key": "bridges",
                            "label": "Bridges",
                            "url": "https://www.google.com/search?q=bridges"
                        }
                    ],
                    "url": "https://www.google.com/search?q=2022"
                },{
                    "key": "2025",
                    "label": "2025",
                    "url": "https://www.google.com/search?q=2025"

                }
            ],
            "url": "https://www.google.com/search?q=challenges"
        },
        {
            "key": "plans",
                    "label": "Plans",
                    "url": "https://www.google.com/search?q=plans"
        }
    ];

    return (
        <div class="panel">
            <div className="sideMenuHeader">
            <FontAwesomeIcon icon="fa-solid fa-chart-line" style={{color: "#fff",}} />
                Statistics
            </div>
            <SideMenu data={dataType === 'data' ? data : screenData} />
        </div>
    );
};

export default AdminPanel;
