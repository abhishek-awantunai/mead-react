import React from 'react';
import Header from '../../components/header/Header';
import HomeService from './../../services/home.service';

interface HomeProps {
    
}

interface HomeState {
    
}

class Home extends React.Component<HomeProps, HomeState> {
    componentWillMount = async () => {
        const homePageData = await HomeService.getHomePageData()
        console.clear();
        console.log(homePageData);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>Home page</h1>
            </React.Fragment>
        );
    }
}

export default Home;