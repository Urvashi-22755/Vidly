/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash"; //underscore.js
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { movieCount, pageSize, onPageChange, currentPage } = props;
  const totalPages = Math.floor((movieCount + pageSize - 1) / pageSize);

  if (totalPages === 1) return null;
  const pages = _.range(1, totalPages + 1);

  // console.log(currentPage);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  movieCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
