import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data.js"

export default function App() {
    const bodyContent = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="container">
            <Header />
            <section>
                {bodyContent}
            </section>
        </div>
    );
}