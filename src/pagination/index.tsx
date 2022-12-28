import React, { useEffect, useState } from 'react';
import './styles.scss';
import { PaginationProps, PageNumberProps } from './types';

const PageNumber = ({ isActive, onPageChange, pageNum }: PageNumberProps) => (
  <div
    className={isActive ? 'active' : ''}
    onClick={() => onPageChange(pageNum)}
  >
    {pageNum}
  </div>
);

/**
 * The comments assume totalPages is 20
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const [pageList, setPageList] = useState<number[]>([]);

  useEffect(() => {
    /**
     * This `start` and `end` will handle pages in the
     * middle of the array, if `currentPage` is
     * greater or equal to 5 and less than
     * or equal to 16
     */
    let start = currentPage - 1;
    let end = currentPage + 1;

    if (currentPage < 5) {
      /**
       * If currentPage is at the beginning of the page list,
       * we want to show (1), 2, 3, 4, 5 so we set the start
       * and end of the array as 2 and 5
       */
      start = 2;
      end = 5;
    } else if (currentPage > totalPages - 4) {
      /**
       * Similarly with the start of the array, we want
       * to handle the end of the page list,
       * we want to show 16, 17, 18, 19, (20), so we
       * set the start to 16 in this case and
       * end with  19 (totalPages - 4 = 16, totalPages - 1 = 19)
       */
      start = totalPages - 4;
      end = totalPages - 1;
    }

    const _pageList = [];

    /** Add pages to the array between start and end */
    for (let i = start; i <= end; i++) {
      _pageList.push(i);
    }

    setPageList(_pageList);
  }, [currentPage, totalPages]);

  return (
    <div className="page-list">
      <PageNumber
        isActive={currentPage === 1}
        onPageChange={onPageChange}
        pageNum={1}
      />

      {
        /**
         * Show ellipsis if currentPage greater or equal to 5,
         * otherwise we want to show the numbers
         */
        currentPage >= 5 ? '...' : ''
      }

      {pageList.map((page: number, i: number) => (
        <PageNumber
          isActive={currentPage === page}
          onPageChange={onPageChange}
          pageNum={page}
        />
      ))}

      {
        /**
         * Show ellipsis if currentPage is less than or equal to 16
         * Otherwise, we want to show the numbers
         */
        currentPage <= totalPages - 4 ? '...' : ''
      }

      <PageNumber
        isActive={currentPage === totalPages}
        onPageChange={onPageChange}
        pageNum={totalPages}
      />
    </div>
  );
};

export default Pagination;
