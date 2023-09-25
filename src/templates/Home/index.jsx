import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { GridContent } from '../../components/GridContent';
import { GridTwoColumn } from '../../components/GridTwoColumn';

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
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;
  console.log(links);
  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-colums') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (section.__component === 'section.section-grid') {
          if (section.text_grid.length > 0) {
            const updatedSection = { ...section, grid: section.text_grid };
            return <GridText key={key} {...updatedSection} />;
          } else if (section.image_grid.length > 0) {
            const updatedSection = { ...section, grid: section.image_grid };
            return <GridImage key={key} {...updatedSection} />;
          }
        }
      })}
    </Base>
  );
}

export default Home;
