import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { PageNotFound } from '../PageNotFound';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const apiData = await fetch('http://localhost:1337/api/pages/1?populate=deep');
        const data = await apiData.json();
        //Conversão do objeto para um array
        const json = await Object.values(data);
        //Diferente do curso, não preciso por json.data[0], somente json[0]
        const { attributes } = await json[0];
        //colado do repositório para teste
        const pageData = mapData([attributes]);
        console.log(pageData[0]);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
