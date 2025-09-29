import React, { useState } from 'react';

const ViewAds = () => {
const data = [
        {
            title: 'Ad 67483493',
            postedBy: 'Admin',
            adType: 'URL',
            category: 'Banner',
            duration: '15 Sec',
            maxShow: 50,
            viewed: 20,
            remaining: 30,
            amount: '30.40 USD',
            status: 'Inactive',
            link: 'https://example.com/ad32210'
        },
        {
            title: 'Ad 34638658',
            postedBy: 'Admin',
            adType: 'URL',
            category: 'Short Link',
            duration: '15 Sec',
            maxShow: 6,
            viewed: 0,
            remaining: 6,
            amount: '30.50 USD',
            status: 'Active',
            link: 'https://example.com/ad52042'
        },
        { title: 'Ad 29489233', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 38, viewed: 2, remaining: 36, amount: '58.44 USD', status: 'Active', link: 'https://example.com/ad65136' }, { title: 'Ad 28541851', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 89, viewed: 59, remaining: 30, amount: '59.42 USD', status: 'Active', link: 'https://example.com/ad15358' }, { title: 'Ad 35545754', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 84, viewed: 45, remaining: 39, amount: '3.53 USD', status: 'Active', link: 'https://example.com/ad54129' }, { title: 'Ad 85001792', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 82, viewed: 14, remaining: 68, amount: '61.51 USD', status: 'Active', link: 'https://example.com/ad73114' }, { title: 'Ad 30672353', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 90, viewed: 77, remaining: 13, amount: '76.07 USD', status: 'Active', link: 'https://example.com/ad9678' }, { title: 'Ad 58504587', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 92, viewed: 88, remaining: 4, amount: '67.12 USD', status: 'Inactive', link: 'https://example.com/ad72882' }, { title: 'Ad 32749157', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 74, viewed: 45, remaining: 29, amount: '67.82 USD', status: 'Inactive', link: 'https://example.com/ad70482' }, { title: 'Ad 89021022', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 11, viewed: 3, remaining: 8, amount: '52.77 USD', status: 'Inactive', link: 'https://example.com/ad61383' }, { title: 'Ad 67305457', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 11, viewed: 7, remaining: 4, amount: '51.73 USD', status: 'Inactive', link: 'https://example.com/ad18288' }, { title: 'Ad 8576682', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 77, viewed: 72, remaining: 5, amount: '41.78 USD', status: 'Active', link: 'https://example.com/ad70213' }, { title: 'Ad 32730131', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 85, viewed: 75, remaining: 10, amount: '42.87 USD', status: 'Active', link: 'https://example.com/ad63840' }, { title: 'Ad 33706246', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 62, viewed: 10, remaining: 52, amount: '91.52 USD', status: 'Active', link: 'https://example.com/ad92425' }, { title: 'Ad 47079264', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 36, viewed: 28, remaining: 8, amount: '46.40 USD', status: 'Active', link: 'https://example.com/ad4285' }, { title: 'Ad 10877403', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 84, viewed: 39, remaining: 45, amount: '54.70 USD', status: 'Inactive', link: 'https://example.com/ad58621' }, { title: 'Ad 42182315', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 23, viewed: 6, remaining: 17, amount: '47.73 USD', status: 'Active', link: 'https://example.com/ad86090' }, { title: 'Ad 4509589', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 23, viewed: 20, remaining: 3, amount: '26.21 USD', status: 'Active', link: 'https://example.com/ad34155' }, { title: 'Ad 82059944', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 92, viewed: 11, remaining: 81, amount: '6.20 USD', status: 'Inactive', link: 'https://example.com/ad65783' }, { title: 'Ad 3677988', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 6, viewed: 0, remaining: 6, amount: '43.21 USD', status: 'Active', link: 'https://example.com/ad98089' }, { title: 'Ad 17503799', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 54, viewed: 27, remaining: 27, amount: '45.30 USD', status: 'Active', link: 'https://example.com/ad23653' }, { title: 'Ad 84485253', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 76, viewed: 64, remaining: 12, amount: '25.98 USD', status: 'Inactive', link: 'https://example.com/ad77522' }, { title: 'Ad 90497970', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 29, viewed: 9, remaining: 20, amount: '31.36 USD', status: 'Inactive', link: 'https://example.com/ad58043' }, { title: 'Ad 55130768', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 5, viewed: 2, remaining: 3, amount: '47.00 USD', status: 'Inactive', link: 'https://example.com/ad45269' }, { title: 'Ad 77829121', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 93, viewed: 71, remaining: 22, amount: '28.73 USD', status: 'Inactive', link: 'https://example.com/ad10340' }, { title: 'Ad 21072838', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 84, viewed: 18, remaining: 66, amount: '64.39 USD', status: 'Inactive', link: 'https://example.com/ad36523' }, { title: 'Ad 9022085', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 53, viewed: 51, remaining: 2, amount: '72.01 USD', status: 'Inactive', link: 'https://example.com/ad9207' }, { title: 'Ad 53305938', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 100, viewed: 21, remaining: 79, amount: '23.12 USD', status: 'Inactive', link: 'https://example.com/ad39327' }, { title: 'Ad 42417602', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 55, viewed: 29, remaining: 26, amount: '59.36 USD', status: 'Active', link: 'https://example.com/ad67443' }, { title: 'Ad 98229919', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 89, viewed: 87, remaining: 2, amount: '7.59 USD', status: 'Active', link: 'https://example.com/ad27594' }, { title: 'Ad 96744823', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 76, viewed: 16, remaining: 60, amount: '50.60 USD', status: 'Active', link: 'https://example.com/ad90129' }, { title: 'Ad 48798761', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 27, viewed: 24, remaining: 3, amount: '72.97 USD', status: 'Inactive', link: 'https://example.com/ad93782' }, { title: 'Ad 32351525', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 3, viewed: 2, remaining: 1, amount: '62.14 USD', status: 'Active', link: 'https://example.com/ad6754' }, { title: 'Ad 28554379', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 1, viewed: 0, remaining: 1, amount: '95.76 USD', status: 'Inactive', link: 'https://example.com/ad85697' }, { title: 'Ad 49219313', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 52, viewed: 39, remaining: 13, amount: '55.16 USD', status: 'Inactive', link: 'https://example.com/ad52806' }, { title: 'Ad 99056236', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 90, viewed: 24, remaining: 66, amount: '2.65 USD', status: 'Active', link: 'https://example.com/ad1677' }, { title: 'Ad 61156516', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 24, viewed: 18, remaining: 6, amount: '67.85 USD', status: 'Active', link: 'https://example.com/ad39603' }, { title: 'Ad 92600955', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 84, viewed: 9, remaining: 75, amount: '4.77 USD', status: 'Inactive', link: 'https://example.com/ad69319' }, { title: 'Ad 89507375', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 96, viewed: 90, remaining: 6, amount: '96.53 USD', status: 'Inactive', link: 'https://example.com/ad69102' }, { title: 'Ad 90933664', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 15, viewed: 6, remaining: 9, amount: '98.78 USD', status: 'Inactive', link: 'https://example.com/ad25474' }, { title: 'Ad 3587882', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 4, viewed: 1, remaining: 3, amount: '0.24 USD', status: 'Active', link: 'https://example.com/ad35956' }, { title: 'Ad 66069619', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 48, viewed: 34, remaining: 14, amount: '77.13 USD', status: 'Active', link: 'https://example.com/ad26922' }, { title: 'Ad 43098513', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 66, viewed: 38, remaining: 28, amount: '16.25 USD', status: 'Active', link: 'https://example.com/ad20885' }, { title: 'Ad 38400572', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 43, viewed: 23, remaining: 20, amount: '38.90 USD', status: 'Active', link: 'https://example.com/ad31496' }, { title: 'Ad 43499525', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 56, viewed: 19, remaining: 37, amount: '79.84 USD', status: 'Active', link: 'https://example.com/ad93930' }, { title: 'Ad 30961020', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 67, viewed: 16, remaining: 51, amount: '28.85 USD', status: 'Active', link: 'https://example.com/ad79527' }, { title: 'Ad 49200301', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 4, viewed: 0, remaining: 4, amount: '22.37 USD', status: 'Active', link: 'https://example.com/ad52772' }, { title: 'Ad 2884718', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 96, viewed: 29, remaining: 67, amount: '89.39 USD', status: 'Active', link: 'https://example.com/ad29596' }, { title: 'Ad 60665318', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 85, viewed: 82, remaining: 3, amount: '90.17 USD', status: 'Active', link: 'https://example.com/ad78958' }, { title: 'Ad 56159033', postedBy: 'Admin', adType: 'URL', category: 'Visit Ad', duration: '15 Sec', maxShow: 5, viewed: 3, remaining: 2, amount: '52.65 USD', status: 'Active', link: 'https://example.com/ad37632' }, { title: 'Ad 5729676', postedBy: 'Admin', adType: 'URL', category: 'Video Ad', duration: '15 Sec', maxShow: 77, viewed: 64, remaining: 13, amount: '15.06 USD', status: 'Inactive', link: 'https://example.com/ad48695' }, { title: 'Ad 20946738', postedBy: 'Admin', adType: 'URL', category: 'Banner', duration: '15 Sec', maxShow: 7, viewed: 4, remaining: 3, amount: '95.22 USD', status: 'Inactive', link: 'https://example.com/ad19005' }, { title: 'Ad 1518843', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 93, viewed: 18, remaining: 75, amount: '25.36 USD', status: 'Active', link: 'https://example.com/ad67098' }, { title: 'Ad 61094717', postedBy: 'Admin', adType: 'URL', category: 'Short Link', duration: '15 Sec', maxShow: 83, viewed: 5, remaining: 78, amount: '60.12 USD', status: 'Active', link: 'https://example.com/ad69879' },];


  // Set the number of items per page
  const itemsPerPage = 9;

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Set up state for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Slice the data based on the current page
  const indexOfLastAd = currentPage * itemsPerPage;
  const indexOfFirstAd = indexOfLastAd - itemsPerPage;
  const currentAds = data.slice(indexOfFirstAd, indexOfLastAd);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-6 rounded-xl">
        <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {currentAds.map((ad, index) => (
          <div key={ad.title + index} className="w-96 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl rounded-xl border-2 border-gray-300 transform transition-transform hover:scale-105 hover:shadow-2xl mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-white">{ad.title}</h1>
              <p className="text-xl font-extrabold text-indigo-800">{ad.amount}</p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg text-gray-200">Ad Duration: {ad.duration}</h2>
              <a href={ad.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-lg">
                View Ad
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <ul className="flex space-x-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === index + 1
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                } transition-all`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ViewAds;
