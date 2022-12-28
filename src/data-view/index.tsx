import React, { useCallback, useEffect, useState } from 'react';
import './styles.scss';
import { DataViewProps, DataType } from './types';
import Pagination from '../pagination';

const DataView = ({ data }: DataViewProps) => {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [dataGroup, setDataGroup] = useState([]);

  useEffect(() => {
    const dataList = JSON.parse(JSON.stringify(data));
    const _group = [];

    for (let i = 0; i < data.length; i += pageSize) {
      _group.push(dataList.slice(i, i + pageSize));
    }

    setDataGroup(_group);
  }, [data]);

  return (
    <div>
      <div className="table">
        <div className="row titles">
          <span>Name</span>
          <span>Thumbnail</span>
        </div>

        {!!dataGroup?.length
          ? dataGroup[page - 1].map((item: DataType, i: number) => (
              <div className="row">
                <span>{item.name}</span>
                <span>
                  <img src={item.url} alt={item.url} />
                </span>
              </div>
            ))
          : 'No Results'}
      </div>

      <Pagination
        currentPage={page}
        totalPages={dataGroup?.length}
        onPageChange={useCallback(
          (page: number) => {
            setPage(page);
          },
          [page]
        )}
      />
    </div>
  );
};

export default DataView;
