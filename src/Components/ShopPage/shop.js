import { Component } from "react";
import Products from "../Product Item/products";
import { FaSearch } from "react-icons/fa";
import {TailSpin} from "react-loader-spinner"
import "./shop.css";
import { Link } from "react-router-dom";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Shop extends Component {
  state = {
    productsData: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: "",
  };

  componentDidMount() {
    this.getProductsData();
  }
  getProductsData = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const response = await fetch("http://localhost:3001/candy/allcandy");
    if (response.ok !== true) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    } else {
      const data = await response.json();
      this.setState({
        productsData: data,
        apiStatus: apiStatusConstants.success,
      });
    }
  };

  onCLickSearchElement = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };
  getFilteredProject = () => {
    const { productsData, searchInput } = this.state;
    const filteredProjects = productsData.filter((eachProject) =>
      eachProject.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredProjects;
  };

  renderLoadingView = () => (
    <div className="products-loader-container">
      <TailSpin color="red" height="80" width="80" />
    </div>
  );

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  renderProductsView = () => {
    const filteredProjects = this.getFilteredProject();
    const shouldShowProducts = filteredProjects.length > 0;

    return shouldShowProducts ? (
      <div className="blur-container">
        <ul className="products-list">
          {filteredProjects.map((eachproduct) => (
            <Products key={eachproduct.id} productsDeatails={eachproduct} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view d-flex flex-column align-items-center justify-content-center">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Products Found</h1>
        <p className="no-products-description">
          We could not find any products. Try other candy.
        </p>
        <Link to="/">
          <button className="btn-retry">Retry</button>
        </Link>
      </div>
    );
  };

  renderAllView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.success:
        return this.renderProductsView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div className="shop-bg">
        <div className="search-container">
          <div className="d-flex align-items-center justify-between  searchh">
            <input
              type="search"
              placeholder="Search here...🍬"
              className="search-el"
              onChange={this.onCLickSearchElement}
              value={searchInput}
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
        {this.renderAllView()}
      </div>
    );
  }
}
export default Shop;
