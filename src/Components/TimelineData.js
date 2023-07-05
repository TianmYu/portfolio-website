const date = new Date()

let TimelineData = [
    {
        text: 2023,
        type: 'timestamp',
    },
    {
        
        text: 'Graduation - Engineering Science Robotics\nUniverity of Toronto | High Honours, 3.9 CGPA\nMinors in Business and AI',
        date: 'June 2023',
        category: {
            tag: 'Education',
            color: '#018f69'
        },
        page_link: false,
        type: 'entry'
    },
    {
        
        text: 'Monte Carlo optimization for intersection crossings',
        date: 'May 2023',
        category: {
            tag: 'Projects',
            color: '#018f69'
        },
        page_link: false,
        page: 'intersections',
        type: 'entry'
    },
    {
        text: 'Thesis Project\nParkinson\'s symptom detection with AI',
        date: 'April 2023',
        category: {
            tag: 'Education',
            color: '#018f69'
        },
        page_link: false,
        page: 'thesis',
        type: 'entry'
    },
    {
        text: 'Capstone Project\nAutonomous drone navigation',
        date: 'April 2023',
        category: {
            tag: 'Education',
            color: '#018f69'
        },
        page_link: false,
        page: 'capstone',
        type: 'entry'
    },
    {
        text: 'RBC innovation challenge\n3rd place finalist',
        date: 'January 2023',
        category: {
            tag: 'Competitions',
            color: '#018f69'
        },
        page_link: false,
        page: 'halleyy',
        type: 'entry'
    },
    {
        text: 'Robotics labs\nMapping, Localization, Control',
        date: 'Spring 2023',
        category: {
            tag: 'Education',
            color: '#018f69'
        },
        page_link: false,
        page: '2023Labs',
        type: 'entry'
    },
    {
        text: 2022,
        type: 'timestamp',
    },
    {
        text: 'Robotics labs\nImage Processing and Recognition',
        date: 'Fall 2022',
        category: {
            tag: 'Education',
            color: '#018f69'
        },
        page_link: false,
        page: '2022Labs',
        type: 'entry'
    },
    {
        text: 'Chief engineer - Blue Sky Solar\nCompletion of test-ready Solar Car',
        date: 'August 2022',
        category: {
            tag: 'Blue Sky Solar Racing',
            color: '#018f69'
        },
        page_link: false,
        page: 'ChiefEng',
        type: 'entry'
    },
    {
        text: 'Full Stack Developer - Overbond\nCompletion of Internship',
        date: 'August 2022',
        category: {
            tag: 'Work',
            color: '#018f69'
        },
        page_link: false,
        page: 'Overbond',
        type: 'entry'
    },
    {
        text: 'Overbond\nStarted position: Full Stack Developer',
        date: 'May 2022',
        category: {
            tag: 'Work',
            color: '#018f69'
        },
        page_link: false,
        page: 'Overbond',
        type: 'entry'
    },
    {
        text: 2021,
        type: 'timestamp',
    },
    {
        text: 'Blue Sky Solar\nStarted posiiton: Chief Engineer',
        date: 'September 2021',
        category: {
            tag: 'Blue Sky Solar Racing',
            color: '#018f69'
        },
        page_link: false,
        page: 'ChiefEng',
        type: 'entry'
    },
    {
        text: 2020,
        type: 'timestamp',
    },
    {
        text: 'Skule Ski Trip - President\nOrganized 56 person ski trip to Quebec',
        date: 'Feburary 2020',
        category: {
            tag: 'Education',
            color: '#018f69'
        },
        page_link: false,
        type: 'entry'
    },
    {
        text: 2019,
        type: 'timestamp',
    },
    {
        text: 'ESROP Research Internship, Singapore\nUniaxial stress testing on dielectric elastomers',
        date: 'May - Aug 2019',
        category: {
            tag: 'Education',
            color: '#018f69'
        },
        page_link: false,
        type: 'entry'
    },
    {
        text: 'Telemetry - Blue Sky Solar\nDeveloped telemetry system and UI',
        date: 'October 2019',
        category: {
            tag: 'Blue Sky Solar Racing',
            color: '#018f69'
        },
        page_link: false,
        page: 'Telem',
        type: 'entry'
    },
    {
        text: 2018,
        type: 'timestamp',
    },
    {
        text: 'CIBC Machine Intelligence Hackathon\nFinalist',
        date: 'October 2018',
        category: {
            tag: 'Competitions',
            color: '#018f69'
        },
        page_link: false,
        type: 'entry'
    },
    {
        text: 'Graduation - Bayview S.S. IB',
        date: 'May 2018',
        category: {
            tag: 'Education',
            color: '#018f69'
        },
        page_link: false,
        type: 'entry'
    },
];

const categoryColors = {
    'Education': '#3a7de8', // light blue
    'Competitions': '#e8b13a', // yellow
    'Blue Sky Solar Racing': '#10369e', // dark blue
    'Work': '#3aa822', // green
}

TimelineData = TimelineData.map((item) => {
    if ('category' in item){
        let itemTag = item.category.tag
        let itemColor = '#8f8f8f' // grey
        if (itemTag in categoryColors){
            itemColor = categoryColors[itemTag]
        }
        return {
            ...item,
            category: {
                tag: itemTag,
                color: itemColor,
            }
        }
    }
    else{
        return item
    }
})

if(TimelineData[0].text !== date.getFullYear()){
    TimelineData.unshift({
        text: date.getFullYear(),
        type: 'timestamp',
    })
}

export default TimelineData;