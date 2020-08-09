import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropType from "prop-types";

const Paginations = props => {
  Paginations.prototype = {
    paginations: PropType.object.isRequired,
    onPageChange: PropType.func
  };

  Paginations.defaultProps = {
    onPageChange: null
  };

  const { paginations, onPageChange } = props;
  const { page, limit } = paginations;
  var totalPage = Math.ceil(500 / limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first onClick={() => handlePageChange(1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          previous
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        />
      </PaginationItem>

      {pageNumbers.map(number => (
        <PaginationItem key={number}>
          <PaginationLink
            className="pagination-num"
            onClick={() => handlePageChange(number)}
          >
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationLink
          next
          disabled={page === totalPage}
          onClick={() => handlePageChange(page + 1)}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last onClick={() => handlePageChange(totalPage)} />
      </PaginationItem>
    </Pagination>
  );
};

export default Paginations;
