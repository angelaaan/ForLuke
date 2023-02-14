import './LandingPage.scss';

const topsecretmessage = "dear luke\ni love you so much\nforever and always\nhappy valentines day :)";
const title = "happy\nvalentines >3"

function LandingPage() {

    return (

        <div className="body">

            <div className="contentContainer">

                <div className="title">
                    <h1>{title}</h1>
                </div>

                <div className="container">

                    <div className="envelope"></div>
                    <div className="card">

                        <h1 className="message" id="breaklines">
                            {topsecretmessage}
                        </h1>

                        <div className="heart"></div>

                    </div>

                    <div className="cover"></div>
                    <div className="lid"></div>
                    <div className="shadow"></div>

                </div>

            </div>

        </div>
    )
}

export default LandingPage;