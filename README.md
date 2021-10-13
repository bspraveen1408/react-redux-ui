This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

## Error

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

 live-search@0.1.0 start C:\Users\PLZ0055\Downloads\search-master\search-master
> react-scripts start

C:\Users\PLZ0055\Downloads\search-master\search-master\node_modules\eslint\lib\source-code\source-code.js:426
        return /\s/u.test(text.replace(/\/\*.*?\*\//gus, ""));
                                       ^

SyntaxError: Invalid regular expression flags
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:607:28)
    
    
    
    
    search
    import React from 'react';
import '../search.css';
import axios from 'axios';
import PageNavigation from './pageNavigation';
import {Link} from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
            totalResults: 0,
            totalPages: 0,
            currentPageNo: 0
        };

        this.cancel = '';
    }

    /**
     * Get the Total Pages count.
     *
     * @param total
     * @param denominator Count of results per page
     * @return {number}
     */
    getPageCount = (total, denominator) => {
        const divisible = 0 === total % denominator;
        const valueToBeAdded = divisible ? 0 : 1;
        return Math.floor(total / denominator) + valueToBeAdded;
    };

    /**
     * Fetch the search results and update the state with the result.
     * Also cancels the previous query before making the new one.
     *
     * @param {int} updatedPageNo Updated Page No.
     * @param {String} query Search Query.
     *
     */
    fetchSearchResults = (updatedPageNo = '', query) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        // const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;
        // var searchUrl = require('json!../../data/popularTables.json');
        const res = [
            {
                database: 'Live JSON generator',
                cluster: '3.1',
                schema: '2014-06-25T00:00:00.000Z',
                demo: 'true',
                table_name: 'Account',
                table_description: 'The main table for accounts indb'
            },
            {
                database: 'Live JSON generator',
                cluster: '3.1',
                schema: '2014-06-25T00:00:00.000Z',
                demo: 'true',
                table_name: 'Payments',
                table_description: 'The main table to show payment methods'
            },
            {
                database: 'Live JSON generator',
                cluster: '3.1',
                schema: '2014-06-25T00:00:00.000Z',
                demo: 'true',
                table_name: 'Credit Card',
                table_description: 'The main table to show data of credit cards'
            }
        ];
        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios
            .get({
                cancelToken: this.cancel.token
            })
            .then(res);
        {
            //res => {
            const total = res.length;
            const totalPagesCount = this.getPageCount(total, 20);
            const resultNotFoundMsg = !res.length ? 'There are no more search results. Please try a new search' : '';
            this.setState({
                results: res,
                message: resultNotFoundMsg,
                totalResults: total,
                totalPages: totalPagesCount,
                currentPageNo: updatedPageNo,
                loading: false
            });
            //  }
        }
        /*.catch( error => {
            if ( axios.isCancel(error) || error ) {
                this.setState({
                    loading: false,
                    message: 'Failed to fetch the data. Please check network'
                })
            }
        } )*/
    };

    handleOnInputChange = event => {
        const query = event.target.value;
        if (!query) {
            this.setState({query, results: {}, message: '', totalPages: 0, totalResults: 0});
        } else {
            this.setState({query, loading: true, message: ''}, () => {
                this.fetchSearchResults(1, query);
            });
        }
    };

    /**
     * Fetch results according to the prev or next page requests.
     *
     * @param {String} type 'prev' or 'next'
     */
    handlePageClick = type => {
        event.preventDefault();
        const updatePageNo = 'prev' === type ? this.state.currentPageNo - 1 : this.state.currentPageNo + 1;

        if (!this.state.loading) {
            this.setState({loading: true, message: ''}, () => {
                this.fetchSearchResults(updatePageNo, this.state.query);
            });
        }
    };

    renderSearchResults = () => {
        const {results} = this.state;

        if (Object.keys(results).length && results.length) {
            return (
                <div className="list">
                    {results.map(result => {
                        return (
                            <div key={result.table_name} className="row">
                                <div className="content">
                                    <div>
                                        {' '}
                                        <Link
                                            to={{
                                                pathname: '/tableDetail',
                                                state: [{name: result.table_name}]
                                            }}
                                        >
                                            {result.table_name}
                                        </Link>
                                    </div>
                                    <div>{result.table_description}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

    render() {
        const {query, loading, message, currentPageNo, totalPages} = this.state;

        const showPrevLink = 1 < currentPageNo;
        const showNextLink = totalPages > currentPageNo;

        return (
            <div className="container">
                {/*	Heading*/}

                {/* Search Input*/}
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        name="query"
                        value={query}
                        id="search-input"
                        placeholder="Search All data..."
                        onChange={this.handleOnInputChange}
                    />
                    <i className="fa fa-search search-icon" aria-hidden="true" />
                    <span className="pageHeader-search-icon" />
                </label>

                {/*	Error Message*/}
                {message && <p className="message">{message}</p>}

                {/*Navigation*/}
                <PageNavigation
                    loading={loading}
                    showPrevLink={showPrevLink}
                    showNextLink={showNextLink}
                    handlePrevClick={() => this.handlePageClick('prev', event)}
                    handleNextClick={() => this.handlePageClick('next', event)}
                />

                {/*	Result*/}
                {this.renderSearchResults()}

                {/*Navigation*/}
                <PageNavigation
                    loading={loading}
                    showPrevLink={showPrevLink}
                    showNextLink={showNextLink}
                    handlePrevClick={() => this.handlePageClick('prev', event)}
                    handleNextClick={() => this.handlePageClick('next', event)}
                />
            </div>
        );
    }
}

export default Search;




tableDetail

import React from 'react';
import axios from 'axios/index';
import {Link} from 'react-router-dom';
import '../search.css';
import Accordion from './accordion';
import '../table.css';

class TableDetail extends React.Component {
    constructor(props) {
        super(props);
        this.cancel = '';
        this.state = {
            name: this.props.location.state[0].name
        };
        // const tableDetails = 'http://localhost:8080/table/{name}';
        const res = {
            id: 'account',
            title: 'Account',
            description:
                'The main table for accounts in db. You could hover this description and click to edit inline. Just like Wikipedia!',
            columns: [
                {
                    id: 1,
                    title: 'Account Id',
                    description: 'column takes int data type',
                    dataType: 'int'
                },
                {
                    id: 2,
                    title: 'Account Number',
                    description: 'column takes int data type',
                    dataType: 'int'
                },
                {
                    id: 3,
                    title: 'Routing Number',
                    description: 'column takes int data type',
                    dataType: 'int'
                },
                {
                    id: 4,
                    title: 'Account Type',
                    description: 'column takes int data type',
                    dataType: 'String'
                },
                {
                    id: 5,
                    title: 'Available Balance',
                    description: 'column takes int data type',
                    dataType: 'int'
                },
                {
                    id: 6,
                    title: 'Account Username',
                    description: 'column takes String data type',
                    dataType: 'String'
                },
                {
                    id: 7,
                    title: 'Account User Email Id',
                    description: 'column takes String data type',
                    dataType: 'String'
                },
                {
                    id: 7,
                    title: 'Account User Contact Number',
                    description: 'column takes int data type',
                    dataType: 'int'
                }
            ]
        };

        const res1 = {
            data: [{count: 250817, nuull: 910980, zero: 8190, min: 10909, max: 10000, avg: 20988, distribution: 209000}]
        };
        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios
            .get({
                cancelToken: this.cancel.token
            })
            .then(res);
        {
            //res => {

            this.state = {
                detailsInfo: res,
                content: res1
            };
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.content.data[0]);
        return header.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>;
        });
    }

    renderTableData() {
        /*let values = Object.values(this.state.content)
        return values.map((content, index) => {
            const { count, nuull, zero, min, max, avg, distribution } = content //destructuring*/
        return this.state.content.data.map((value, index) => {
            const {count, nuull, zero, min, max, avg, distribution} = value; //destructuring
            return (
                <tr key={count}>
                    <td>{count}</td>
                    <td>{nuull}</td>
                    <td>{zero}</td>
                    <td>{min}</td>
                    <td>{max}</td>
                    <td>{avg}</td>
                    <td>{distribution}</td>
                </tr>
            );
        });
    }

    render() {
        const {name, detailsInfo} = this.state;
        return (
            <div className="container">
                <div>
                    <div>
                        {this.state.detailsInfo ? (
                            <div>
                                <div className="content">
                                    <h5>
                                        <b>{this.state.detailsInfo.title}</b>
                                    </h5>
                                    <p>{this.state.detailsInfo.description}</p>
                                </div>
                                <div className="content">
                                    <h4 className="alignleft">
                                        <b>Columns</b>
                                    </h4>
                                    <span className="alignright">
                                        <b>Sort</b>{' '}
                                        <span>
                                            <button type="button" className="btn btn-outline-secondary btn-sm">
                                                Alphabetical
                                            </button>
                                        </span>
                                    </span>
                                </div>

                                <div className="container">
                                    {this.state.detailsInfo.columns.map(item => {
                                        return (
                                            <div key={item.title} className="row">
                                                <div> </div>
                                                <div className="content" display="inline-block">
                                                    <div>
                                                        <b>
                                                            <Link to="/page1">{item.title}</Link>
                                                        </b>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.dataType}
                                                        <div>{item.description}</div>
                                                        <Accordion
                                                            content={
                                                                <table id="columnstats">
                                                                    <tbody>
                                                                        <tr>{this.renderTableHeader()}</tr>
                                                                        {this.renderTableData()}
                                                                    </tbody>
                                                                </table>
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default TableDetail;


scroll to top

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}
ScrollToTop.propTypes = {location: PropTypes.object};

export default withRouter(ScrollToTop);

app.jsx

import './css/app.css';
import React from 'react';
import {hot} from 'react-hot-loader';
import Helmet from 'react-helmet';
import {Route} from 'react-router-dom';

import ScrollToTop from './util/scroll-to-top';
import Home from './routes/home';
import Page1 from './routes/page1';
import TableDetail from './routes/components/tableDetail';
import Accordion from './routes/components/accordion';

// Note: Since the Template uses react-redux's connect, it won't render
// route changes unless we explicitly pass a prop to it.
// @see https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking

function renderTemplate(routerProps) {
    
}

// hot() needs to be applied to a component
let Root = hot(module)(ScrollToTop);

export default (
    <Root>
        <Route render={renderTemplate} />
    </Root>
);


updated table details

import React from 'react';
import axios from 'axios/index';
import {Link} from 'react-router-dom';
import '../search.css';
import Accordion from './accordion';
import '../table.css';
class TableDetail extends React.Component {
constructor(props) {
super(props);
this.cancel = '';
this.state = {
name: this.props.location.state[0].name
};
// const tableDetails = 'http://localhost:8080/table/{name}';
const res = {
id: 'account',
title: 'Account',
description:
'The main table for accounts in db. You could hover this description and click to edit inline. Just like Wikipedia!',
columns: [
{
id: 1,
title: 'Account Id',
description: 'column takes int data type',
dataType: 'int'
},
{
id: 2,
title: 'Account Number',
description: 'column takes int data type',
dataType: 'int'
},
{
id: 3,
title: 'Routing Number',
description: 'column takes int data type',
dataType: 'int'
},
{
id: 4,
title: 'Account Type',
description: 'column takes int data type',
dataType: 'String'
},
{
id: 5,
title: 'Available Balance',
description: 'column takes int data type',
dataType: 'int'
},
{
id: 6,
title: 'Account Username',
description: 'column takes String data type',
dataType: 'String'
},
{
id: 7,
title: 'Account User Email Id',
description: 'column takes String data type',
dataType: 'String'
},
{
id: 7,
title: 'Account User Contact Number',
description: 'column takes int data type',
dataType: 'int'
}
]
};
    const res1 = {
        data: [{count: 250817, nuull: 910980, zero: 8190, min: 10909, max: 10000, avg: 20988, distribution: 209000}]
    };
    if (this.cancel) {
        this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
        .get({
            cancelToken: this.cancel.token
        })
        .then(res);
    {
        //res => {

        this.state = {
            detailsInfo: res,
            content: res1
        };
    }
}

renderTableHeader() {
    let header = Object.keys(this.state.content.data[0]);
    return header.map((key, index) => {
        return <th key={key}>{key.toUpperCase()}</th>;
    });
}

renderTableData() {
    /*let values = Object.values(this.state.content)
    return values.map((content, index) => {
        const { count, nuull, zero, min, max, avg, distribution } = content //destructuring*/
    return this.state.content.data.map((value, index) => {
        const {count, nuull, zero, min, max, avg, distribution} = value; //destructuring
        return (
            <tr key={count}>
                <td>{count}</td>
                <td>{nuull}</td>
                <td>{zero}</td>
                <td>{min}</td>
                <td>{max}</td>
                <td>{avg}</td>
                <td>{distribution}</td>
            </tr>
        );
    });
}

render() {
    const {name, detailsInfo} = this.state;
    return (
        <div className="container">
            <div>
                <div>
                    {this.state.detailsInfo ? (
                        <div>
                            <div className="content">
                                <h5>
                                    <b>{this.state.detailsInfo.title}</b>
                                </h5>
                                <p>{this.state.detailsInfo.description}</p>
                            </div>
                            <div className="content">
                                <h4 className="alignleft">
                                    <b>Columns</b>
                                </h4>
                                <span className="alignright">
                                    <b>Sort</b>{' '}
                                    <span>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">
                                            Alphabetical
                                        </button>
                                    </span>
                                </span>
                            </div>

                            <div className="row">

                                        <div className="col-md-9">
                                            {this.state.detailsInfo.columns.map(item => {
                                                return (
                                                    <div key={item.title} className="row">
                                                        <div> </div>
                                                        <div className="content" display="inline-block">
                                                            <div>
                                                                <b>
                                                                    <Link to="/page1">{item.title}</Link>
                                                                </b>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.dataType}
                                                                <div>{item.description}</div>
                                                                <Accordion
                                                        content={
                                                                <table id="columnstats">
                                                                    <tbody>
                                                                        <tr>{this.renderTableHeader()}</tr>
                                                                        {this.renderTableData()}
                                                                    </tbody>
                                                                </table>
                                                        }  
                                                    /> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="col-md-3">
                                            <div className="side-page">
                                                <div className="col-md-12 owned-by">
                                                    <div className="owned-by-header">OWNED BY</div>
                                                    <div className="owned-by-body">
                                                        <span className="owned-by-icon"><img src="../img/user-icon.jpg" /></span>
                                                        <span className="owned-by-title">Mark Grover</span>
                                                    </div>
                                                    <div className="owned-by-body">
                                                        <span className="owned-by-icon"><img src="../img/user-icon.jpg" /></span>
                                                        <span className="owned-by-title">Nick Wilson</span>
                                                    </div>
                                                </div>
                                                <div className="frequent-users col-md-12">
                                                    <div>FREQENT USERS</div>
                                                    <div className="owned-by-icon"><img src="../img/user-icon.jpg" /><img src="../img/user-icon.jpg" /><img src="../img/user-icon.jpg" /><img src="../img/user-icon.jpg" /><img src="../img/user-icon.jpg" /><img src="../img/user-icon.jpg" /></div>
                                                </div>
                                                <div className="table-profile col-md-12">
                                                    <div>TABLE PROFILE</div>
                                                    <div><button type="button" class="btn btn-outline-secondary btn-sm mt-2"><Link to='/preview'>Data Preview</Link></button></div>
                                                </div>
                                                <div className="col-md-12 mt-4"><button type="button" class="btn btn-pink btn-follow btn-sm col-md-12" >FOLLOW TABLE</button></div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
}
export default TableDetail;

table css

img {
    width: 24px;
    height: 25px;
    border-radius: 100%;  
  }
  .side-page{
    padding-top: 20px;
    min-height: 400px;
    box-shadow: 0px 4px 8px rgba(0,0,0,.175)!important;
  }
  .owned-by-body{
    padding: 4px 0px;
  }
  .owned-by-title{
    vertical-align: bottom;
    padding-left: 7px;
  }
  .frequent-users{
    margin-top: 12px;
  
  }
  .btn-follow{
    background-color:#563d7c !important;
    color:white;
  }
  .btn-follow:hover{
    color:white;
  }
  .table-profile{
    margin: 14px 0px;
  }

newtabledetail
  renderTableHeader() {
        let header = Object.keys(this.state.content.data[0]);
        return header.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>;
        });
    }

    renderTableData() {
        /*let values = Object.values(this.state.content)
        return values.map((content, index) => {
            const { count, nuull, zero, min, max, avg, distribution } = content //destructuring*/
        return this.state.content.data.map((value, index) => {
            const {count, nuull, zero, min, max, avg, distribution} = value; //destructuring
            return (
                <tr key={count}>
                    <td>{count}</td>
                    <td>{nuull}</td>
                    <td>{zero}</td>
                    <td>{min}</td>
                    <td>{max}</td>
                    <td>{avg}</td>
                    <td>{distribution}</td>
                </tr>
            );
        });
    }
    sortColumns = () => {
        let detailsInfo = this.state.detailsInfo;
        let items = detailsInfo.columns.sort((item1, item2) =>
            item1['title'] > item2['title'] ? 1 : item1['title'] < item2['title'] ? -1 : 0
        );
        detailsInfo.columns = items;
        this.setState(() => {
            return {
                detailsInfo: detailsInfo
            };
        });
    };

    render() {
        const {name, detailsInfo} = this.state;
        return (
            <div className="rowC">
                <div className="container-main">
                    <div>
                        <div>
                            {this.state.detailsInfo ? (
                                <div>
                                    <div className="content">
                                        <h5>
                                            <b>{this.state.detailsInfo.title}</b>
                                        </h5>
                                        <p>{this.state.detailsInfo.description}</p>
                                    </div>
                                    <div className="content">
                                        <h4 className="alignleft">
                                            <b>Columns</b>
                                        </h4>
                                        <span className="alignright">
                                            <b>Sort</b>{' '}
                                            <span>
                                                {/* change start */}
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-sm"
                                                    onClick={this.sortColumns.bind(this)}
                                                >
                                                    Alphabetical
                                                </button>
                                                {/* change end */}
                                            </span>
                                        </span>
                                    </div>

                                    <div className="container">
                                        {this.state.detailsInfo.columns.map(item => {
                                            return (
                                                <div key={item.title} className="row">
                                                    <div> </div>
                                                    <div className="content" display="inline-block">
                                                        <div>
                                                            <b>
                                                                <Link to="/page1">{item.title}</Link>
                                                            </b>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.dataType}
                                                            <div>{item.description}</div>
                                                            <Accordion
                                                                content={
                                                                    <table id="columnstats">
                                                                        <tbody>
                                                                            <tr>{this.renderTableHeader()}</tr>
                                                                            {this.renderTableData()}
                                                                        </tbody>
                                                                    </table>
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        );
    }
}
export default TableDetail;
sidebar
import React from 'react';
import '../search.css';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFollow: ''
        };
    }

    render() {
        return (
            <div className="alignright-sidebar">
                <div className="side-page">
                    <div className="col-sm-3 owned-by">
                        <div className="owned-by-header">OWNED BY</div>
                        <div className="owned-by-body">
                            <span className="owned-by-title">Mark Grover</span>
                        </div>
                        <div className="owned-by-body">
                            <span className="owned-by-title">Nick Wilson</span>
                        </div>
                    </div>
                    <div className="frequent-users col-md-12">
                        <div>FREQENT USERS</div>
                        <div className="owned-by-icon">
                            <img src="../img/user-icon.jpg" />
                            <img src="../img/user-icon.jpg" />
                            <img src="../img/user-icon.jpg" />
                            <img src="../img/user-icon.jpg" />
                            <img src="../img/user-icon.jpg" />
                            <img src="../img/user-icon.jpg" />
                        </div>
                    </div>
                    <div className="table-profile col-md-12">
                        <div>TABLE PROFILE</div>
                        <div>
                            <button type="button" className="btn btn-outline-secondary btn-sm mt-2">
                                <Link
                                    to={{
                                        pathname: '/preview'
                                    }}
                                >Data Preview</Link>

                            </button>
                        </div>
                    </div>
                    {/* change start*/}
                    <div className="col-md-12 mt-4">
                        <button
                            type="button"
                            className="btn btn-pink btn-follow btn-sm col-md-12"
                            onClick={() => this.setState({isFollow: !this.state.isFollow})}
                        >
                            {!this.state.isFollow ? 'FOLLOW TABLE' : 'UNFOLLOW TABLE'}
                        </button>
                    </div>
                    {/* change end*/}
                </div>
            </div>
        );
    }
}

export default Sidebar;

tablecss
#columnstats {
    text-align: center;
    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border: 3px solid #ddd;
    width: 100%;
}

#columnstats td,
#columnstats th {
    border: 1px solid #ddd;
    padding: 8px;
}

#columnstats tr:nth-child(even) {
    background-color: #f2f2f2;
}

#columnstats tr:hover {
    background-color: #ddd;
}

#columnstats th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #f2f2f2;
    color: black;
}
img {
    width: 24px;
    height: 25px;
    border-radius: 100%;
}
.side-page {
    padding-top: 20px;
    min-height: 400px;
    height: 50px;
    /*min-width: 100px;*/
    /*align-items: center;*/
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.175) !important;
    padding-right: 50px;
    padding-left: 30px;
    padding-bottom: 10px;
}
.owned-by-body {
    padding: 4px 0px;
}
.owned-by-title {
    vertical-align: bottom;
    padding-left: 7px;
}
.frequent-users {
    margin-top: 12px;
}
.btn-follow {
    background-color: #563d7c !important;
    color: white;
}
.btn-follow:hover {
    color: white;
}
.table-profile {
    margin: 14px 0px;
}

.rowC {
    display: flex;
    flex-direction: row;
}
.alignright-sidebar {
    float: right;
    text-align: left;
    padding-left: 30px;
    padding-top: 50px;
}
.container-main {
    padding-right: 100px;
    padding-left: 205px;
    padding-top: 50px;
}

preview

import React from 'react';
import axios from 'axios/index';
import '../search.css';
import Accordion from './accordion';
import '../table.css';
import sidebar from './Sidebar';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.cancel = '';
        const res1 = {
            data: [{count: 250817, nuull: 910980, zero: 8190, min: 10909, max: 10000, avg: 20988, distribution: 209000}]
        };
        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios
            .get({
                cancelToken: this.cancel.token
            })
            .then(res1);
        {
            //res => {

            this.state = {
                content: res1
            };
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.content.data[0]);
        return header.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>;
        });
    }

    renderTableData() {
        return this.state.content.data.map((value, index) => {
            const {count, nuull, zero, min, max, avg, distribution} = value; //destructuring
            return (
                <tr key={count}>
                    <td>{count}</td>
                    <td>{nuull}</td>
                    <td>{zero}</td>
                    <td>{min}</td>
                    <td>{max}</td>
                    <td>{avg}</td>
                    <td>{distribution}</td>
                </tr>
            );
        });
    }


    render() {
        const {name, detailsInfo} = this.state;
        return (

            <div className="content" display="inline-block">

                <table id="columnstats">
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>

            </div>

        );
    }
}
export default Preview;

app.jsx
<Route path="/preview" component={Preview} />

accrdn
import React, {useState, useRef} from 'react';
import Chevron from './chevron';

import '../accordion.css';

function Accordion(props) {
    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState('accordion__icon');

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
        setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
    }

    return (
        <div>
            <div className="alignright">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                    <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
                </button>
            </div>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
                <div className="accordion__text">{props.content}</div>
            </div>
        </div>
    );
}

export default Accordion;

chevron
import React from 'react';

function Chevron(props) {
    return (
        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
        >
            <path
                fill={props.fill}
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
        </svg>
    );
}

export default Chevron;


tablecs

#columnstats {
    text-align: center;
    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border: 3px solid #ddd;
    width: 100%;
}

#columnstats td,
#columnstats th {
    border: 1px solid #ddd;
    padding: 8px;
}

#columnstats tr:nth-child(even) {
    background-color: #f2f2f2;
}

#columnstats tr:hover {
    background-color: #ddd;
}

#columnstats th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #f2f2f2;
    color: black;
}
img {
    width: 24px;
    height: 25px;
    border-radius: 100%;
}
.side-page {
    padding-top: 20px;
    min-height: 400px;
    height: 50px;
    /*min-width: 100px;*/
    /*align-items: center;*/
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.175) !important;
    padding-right: 50px;
    padding-left: 30px;
    padding-bottom: 10px;
}
.owned-by-body {
    padding: 4px 0px;
}
.owned-by-title {
    vertical-align: bottom;
    padding-left: 7px;
}
.frequent-users {
    margin-top: 12px;
}
.btn-follow {
    background-color: #563d7c !important;
    color: white;
}
.btn-follow:hover {
    color: white;
}
.table-profile {
    margin: 14px 0px;
}

.rowC {
    display: flex;
    flex-direction: row;
}
.alignright-sidebar {
    float: right;
    text-align: left;
    padding-left: 30px;
    padding-top: 50px;
}
.container-main {
    padding-right: 20px;
    padding-left: 205px;
    padding-top: 50px;
}
html {
    height: 100%;
}

body {
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-image: linear-gradient(#5b1492, #882973, #ce7eb5);
}
.modal1 {
    position: center;
    z-index: auto;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.25);
}

.modal_content {
    background-color: white;
    position: page;
    top: 20%;
    left: 100%;
    width: 40%;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid black;
}

.close {
    color: coral;
    float: left;
    width: 30%;
}

.close:hover {
    color: cyan;
    cursor: pointer;
}












    
    
    
    

