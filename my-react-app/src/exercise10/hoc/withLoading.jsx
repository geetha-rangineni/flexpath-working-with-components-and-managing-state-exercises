// import React from "react";

// const withLoading = (WrappedComponent) => {
//   return function WithLoadingComponent({ isLoading, ...props }) {
//     if (isLoading) {
//       return <p>Loading...</p>;
//     }
//     return <WrappedComponent {...props} />;
//   };
// };

// export default withLoading;





import React, { useState, useEffect } from "react";

function withLoading(WrappedComponent, dataFetcher) {
  return function WithLoadingComponent(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
      dataFetcher().then((response) => setData(response));
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
}

export default withLoading;
