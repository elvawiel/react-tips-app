import Layout from "./Layout";

import TipTable from "./TipTable";

function TipsListPage({ tips, deleteTip }) {
  return (
    <Layout>
      <div className="container mt-4">
        <h1 className="mb-4">Sugestie</h1>

        <TipTable tips={tips} deleteTip={deleteTip} />
      </div>
    </Layout>
  );
}

export default TipsListPage;
