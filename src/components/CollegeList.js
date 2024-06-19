import React, { useState, useEffect } from "react";

const colleges = [
  {
    name: "IIM Ahmedabad",
    rating: 4.5,
    fees: { amount: "₹ 50,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 100,000", highest: "₹ 200,000" },
    userRating: 4.0,
    featured: true,
  },
  {
    name: "IIM Bangalore",
    rating: 4.0,
    fees: { amount: "₹ 40,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 95,000", highest: "₹ 190,000" },
    userRating: 3.5,
    featured: false,
  },
  {
    name: "IIM Calcutta",
    rating: 3.5,
    fees: { amount: "₹ 30,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 93,000", highest: "₹ 185,000" },
    userRating: 3.0,
    featured: true,
  },
  {
    name: "IIM Lucknow",
    rating: 4.2,
    fees: { amount: "₹ 45,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 90,000", highest: "₹ 180,000" },
    userRating: 4.3,
    featured: false,
  },
  {
    name: "IIM Kozhikode",
    rating: 3.8,
    fees: { amount: "₹ 35,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 88,000", highest: "₹ 175,000" },
    userRating: 3.7,
    featured: true,
  },
  {
    name: "IIM Indore",
    rating: 4.7,
    fees: { amount: "₹ 55,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 85,000", highest: "₹ 170,000" },
    userRating: 4.8,
    featured: false,
  },
  {
    name: "IIT Bombay",
    rating: 4.3,
    fees: { amount: "₹ 48,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 120,000", highest: "₹ 250,000" },
    userRating: 4.2,
    featured: true,
  },
  {
    name: "IIT Delhi",
    rating: 3.6,
    fees: { amount: "₹ 32,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 115,000", highest: "₹ 240,000" },
    userRating: 3.4,
    featured: false,
  },
  {
    name: "IIT Kanpur",
    rating: 4.1,
    fees: { amount: "₹ 42,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 110,000", highest: "₹ 230,000" },
    userRating: 4.1,
    featured: false,
  },
  {
    name: "IIT Madras",
    rating: 3.9,
    fees: { amount: "₹ 39,000", course: "BE/B.Tech", period: "1st year Fees" },
    placement: { average: "₹ 105,000", highest: "₹ 220,000" },
    userRating: 3.8,
    featured: true,
  },
];

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    loadMoreData();
  }, [page]);

  const loadMoreData = () => {
    const newData = colleges.slice(0, page * itemsPerPage);
    setData(newData);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const filteredData = sortedData().filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScroll = (event) => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Search by college name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table className="min-w-full border-collapse block md:table">
        <thead className="block bg-green-100 md:table-header-group">
          <tr className="border border-gray-300 block md:table-row">
            <th
              className="p-2 border border-gray-300 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              College Name
            </th>
            <th
              className="p-2 border border-gray-300 cursor-pointer"
              onClick={() => handleSort("rating")}
            >
              Collegedunia Rating
            </th>
            <th
              className="p-2 border border-gray-300 cursor-pointer"
              onClick={() => handleSort("fees.amount")}
            >
              Fees
            </th>
            <th
              className="p-2 border border-gray-300 cursor-pointer"
              onClick={() => handleSort('placement.average')}
            >
              Placement
            </th>
            <th
              className="p-2 border border-gray-300 cursor-pointer"
              onClick={() => handleSort("userRating")}
            >
              User Review Rating
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {filteredData.map((college, index) => (
            <tr
              key={index}
              className={`border border-gray-300 block md:table-row ${college.featured ? 'bg-red-100' : ''}`}
            >
              <td className="p-2 border border-gray-300 block md:table-cell">
                {college.name}{" "}
                {college.featured && (
                  <span className="text-red-500  font-bold">(Featured)</span>
                )}
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                {college.rating}
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell text-left">
                <div>{college.fees.amount}</div>
                <div className="mt-1">{college.fees.course}</div>
                <div className="mt-1">{college.fees.period}</div>
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                <div>{college.placement.average}<br />Average Package</div>
                <div className="mt-1">{college.placement.highest}<br />Highest Package</div>
              </td>
              <td className="p-2 border border-gray-300 block md:table-cell">
                {college.userRating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
