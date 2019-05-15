import React from "react";

const Paginate = props => {
  const { offerPerPage, offers } = props.state;

  const length = offers.length;
  const numberOfpage = length / offerPerPage;
  const ListPage = [];
  for (let i = 1; i <= Math.ceil(numberOfpage); i++) {
    ListPage.push(i);
  }

  return (
    <div>
      <ul className="list-page">
        {ListPage.map(number => {
          return (
            <li key={number} onClick={() => props.onClick(number)}>
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginate;
