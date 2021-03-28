import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Container} from "react-bootstrap";

class Offer extends React.Component {
    render() {
        return (
            <Container id="podstrona">
                <h1 className="title">Oferta</h1>
                <p className='top'>Biuro Projektowe Gór-Spec jest ukierunkowane na wykonywanie wielobranżowej
                    dokumentacji projektowo – kosztorysowej obejmującej swoim zakresem:<br/>
                    -Projekty nowych kopalń – projekty koncepcyjne i techniczne oraz programy funkcjonalno – użytkowe
                    związane z tym zagadnieniem wraz z ekonomiczną oceną przedsięwzięć i analizą ryzyka
                    inwestycyjnego,<br/>
                    -Koncepcje zagospodarowania powierzchni rozbudowywanego zakładu górniczego wraz z tworzeniem planów
                    zagospodarowania złoża,<br/>
                    -Ocena warunków środowiskowych i ocena wpływu przedsięwzięcia inwestycyjnego na środowisko.<br/>
                    -Uzyskiwanie w imieniu Inwestora wszelkich pozwoleń i decyzji związanych ze zleconym zadaniem,<br/>
                    -Rewitalizację obiektów kopalnianych (pokopalnianych) oraz likwidację obiektów budowlanych.<br/>
                    -Odwadnianie kopalń i projektowanie instalacji przeciwpożarowych na dole zakładów górniczych.<br/>
                    <br/>
                    Kluczową branżą naszej firmy jest branża mechaniczna, której kluczowym elementem jest opracowanie
                    pełnej dokumentacji, w tym dokumentacji dopuszczeniowej dotyczącej urządzeń i wyposażenia górniczych
                    wyciągów szybowych i układów przyszybowych, jak:<br/>
                    • naczynia wyciągowe,<br/>
                    • koła linowe,<br/>
                    • rurociągi i pomosty robocze,<br/>
                    • urządzenia przyszybowe,<br/>
                    • urządzenia załadowcze oraz rozładowcze wyciągów szybowych.<br/>
                    <br/>
                    Projekty są opracowywane stosownie do obowiązujących norm, przepisów, uwarunkowań lokalnych i
                    terenowych.</p>
            </Container>

        )
    }
}

export default Offer;