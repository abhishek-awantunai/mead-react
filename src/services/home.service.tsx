import axios  from 'axios';

axios.defaults.baseURL = 'https://nodeapiqa.moglilabs.com/nodeApi/v1';

const getHomePageData = () => {
    fetch('https://nodeapiqa.moglilabs.com/nodeApi/v1/homepage/layoutbyjson?requestType=mobile', {}).then((response) => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
}

const HomeService = {
    getHomePageData
};

export default HomeService;