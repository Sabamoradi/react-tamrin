import { useEffect, useState } from "react";
import "./index.css";
import TabsButton from "../../components/TabsButton";
import Loading from "../../components/Loading/index";
const url = "https://course-api.com/react-tabs-project";
const Tabs = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [jobsData, setJobsData] = useState({});
  const [itemIndex, setItemIndex] = useState(0);

  const filterCategories = items => {
    const newItem = [...new Set(items.map(el => el.company))];
    setCategories(newItem);
    setLoadingData(false);
  };
  const getData = async () => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(newData);
    setJobsData(newData[itemIndex]);
    filterCategories(newData);
  };
  const activeItem = (el, index) => {
    setItemIndex(index);
    const newActiveItem = data.find(item => item.company === el);
    setJobsData(newActiveItem);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="tabs_wrapper">
      <section className="tabs-section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline" />
        </div>
        {loadingData
          ? <Loading />
          : <div className="jobs-center">
              <TabsButton
                categoriesData={categories}
                activeItem={activeItem}
                itemIndex={itemIndex}
              />
              <div className="job-info">
                <h3>
                  {jobsData.title}
                </h3>
                <h4>
                  {jobsData.company}
                </h4>
                <p className="job-date">
                  {jobsData.dates}
                </p>
                {jobsData.duties.map((duty, index) => {
                  return (
                    <div key={index} className="job-desc">
                      <p>
                        {duty}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>}
      </section>
    </div>
  );
};
export default Tabs;
