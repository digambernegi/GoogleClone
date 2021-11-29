import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
//import Response from "./response";
import Search from "./Search.js";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = () => {
  const [{ term = "tesla" }] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log("here", data);
  //const data = Response;
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="//www.google.com/logos/doodles/2021/get-vaccinated-wear-a-mask-save-lives-august-19-copy-6753651837109303-2xa.gif"
            alt=""
          />
        </Link>

        <div className="searchPage_headerBody">
          <Search input hidebuttons />
          <div className="searchPage_option">
            <div className="option_left">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/#">All </Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/#">News </Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/#">Images </Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/#">Shooting</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/#">Maps </Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/#">More </Link>
              </div>
            </div>

            <div className="option_right">
              <div className="searchPage_option">
                <Link to="/#">Tools </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_result">
          <p className="result_count">
            About{data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
            {/*  for{term} */}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_results">
              <a className="searchPage_resultsLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}

                {item.displayLink}
              </a>

              <a className="searchPage_result_title" href={item.link}>
                <h2> {item.title}</h2>
              </a>

              <p className="searchPage_result_snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
