import { Link } from "react-router-dom";

function ComponentExample() {
  let location = useLocation();

  const getData = async () => {
    const getTheData = await makeRequest(location.pathname);

    return setData({
      loading: false,
      data: getTheData,
    });
  };

  const [data, setData] = useState(movieData);
  const { loading, data } = movie;

  useEffect(() => getData(), []);

  return <></>;
}

export default ComponentExample;
