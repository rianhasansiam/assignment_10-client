

const NoDataFound = () => {
  return (
    
        <div className="flex flex-col items-center justify-center  py-20 w-full  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-gray-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01M3 12a9 9 0 1018 0 9 9 0 00-18 0z"
        />
      </svg>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Data Found</h2>
      <p className="text-gray-500">We couldn’t find any data to display.</p>
        </div>
 
  );
};

export default NoDataFound;
