import Layout from "../components/layout";
import Fetch from "isomorphic-unfetch";


const Index = (props)=>(
    <Layout>
    <div>
       
   <h1>Welcome to BitzPrice</h1> 
   {props.bpi}
    </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await res.json();
    console.log("yuh")

    return {
        bpi: data
    }
}


export default Index