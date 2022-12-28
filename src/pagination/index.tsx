import React, { useEffect, useState } from 'react';
import './styles.scss';
import { PaginationProps } from './types';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const [pageList, setPageList] = useState<number[]>([]);

  useEffect(() => {
    let start = currentPage - 1;
    let end = currentPage + 1;

    if (currentPage < 5) {
      start = 2;
      end = 5;
    } else if (currentPage > totalPages - 4) {
      start = totalPages - 4;
      end = totalPages - 1;
    }

    const _pageList = [];

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        if (i > 0 && i < totalPages + 1) {
          _pageList.push(i);
        }
      }
    }

    setPageList(_pageList);
  }, [currentPage, totalPages]);

  return (
    <div className="page-list">
      <div
        className={currentPage === 1 ? 'active' : ''}
        onClick={() => onPageChange(1)}
      >
        1
      </div>
      {currentPage > 4 ? '...' : ''}
      {pageList.map((page: number, i: number) => (
        <div
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}

      {currentPage < totalPages - 3 ? '...' : ''}
      <div
        className={currentPage === totalPages ? 'active' : ''}
        onClick={() => onPageChange(totalPages)}
      >
        {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
