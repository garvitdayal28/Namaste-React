const Shimmer = () => {
  return (
    <div className="ShimmerContainer flex flex-wrap pt-7 justify-center">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmerCard border-2 border-gray-200 rounded-2xl w-70 h-90 ml-7 mr-7 mt-5
                m-3 relative overflow-hidden bg-gray-100"
          >
            <div className="animate-pulse">
              <div className="h-48 w-full bg-gray-200 rounded-t-2xl"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white to-transparent shimmer-animation"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

// Add this to your global CSS to make the shimmer effect work
// .shimmer-animation {
//   background-size: 1000px 100%;
//   animation: shimmer 2s infinite linear;
// }
// @keyframes shimmer {
//   from {
//     background-position: -1000px 0;
//   }
//   to {
//     background-position: 1000px 0;
//   }
// }
