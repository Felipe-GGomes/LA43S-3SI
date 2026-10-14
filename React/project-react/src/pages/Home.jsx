
import { CardGrid } from "../components/CardGrid";
import "./Content.css"

function Home() {
    return (
        <>
            <div className="content-header">
                <h1>Inspirações</h1>
            </div>

            <CardGrid />
        </>
    );
}

export default Home;