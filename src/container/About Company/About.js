import ofirmie from './ofirmieobraz.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {Container} from "react-bootstrap";

class About extends React.Component {
    render() {
        return (
            <Container id="podstrona">
                <h1 className="title">O firmie</h1>
                <p className='top'><img src={ofirmie} alt=''/>Biuro Projektowe Gór-Spec sp. z o.o.
                    kontynuuje pracę firmy pod nazwą Biuro Projektowe Gór-Spec Marek Orzeł i jest firmą ukierunkowaną na
                    wykonywanie dokumentacji projektowej oraz prowadzenie inwestycji budowlanych i dostawczych. Jesteśmy
                    zespołem z wieloletnim doświadczeniem, realizującym zadania głównie dla branży górniczej. Nasze
                    działania oparte są na zasadach profesjonalizmu, konstruktywności,odpowiedzialności i
                    rzetelności.<br/>
                    <br/>
                    Wykorzystywane przez nasze biuro najnowocześniejsze technologie projektowe i inwentaryzacyjne
                    pozwalają optymalizować koszty wykonawcze przedsięwzięć realizowanych w oparciu o opracowaną przez
                    nas dokumentację. Dbamy o wysokie standardy każdego z projektów.<br/>
                    <br/>
                    Nasza kadra przeważnie realizuje zadania w technologii projektowania parametrycznego, opartego o
                    zasady BIM (z ang.: Building Information Modeling) wspartego skaningiem laserowym TLS (3D) oraz
                    technologią georadarową.<br/>
                    <br/>
                    Siłą zespołu jest ukierunkowanie na sukces, przy zachowaniu zasady stosowania najlepszych rozwiązań
                    dla Zleceniodawcy. Dzięki takiemu podejściu osiągamy doskonałe wyniki w naszej pracy, poparte
                    zadowoleniem klientów. W okresie ostatnich pięciu lat personel naszego biura uczestniczył w jednych
                    z największych zadań projektowych branży górnictwa węgla kamiennego, takich jak:<br/>
                    - Wykonanie opracowań projektowych (w tym projektów budowlanych i technologicznych) związanych z
                    zadaniem: „Transport w wyrobiskach dołowych i wydobycie kamienia szybem 1.5 oraz jego
                    zagospodarowanie na powierzchni” – dla Lubelski Węgiel „Bogdanka” S.A.,<br/>
                    - Wykonanie kompletnej dokumentacji projektowej (budowlano-wykonawczej i technicznej) oraz pełnienie
                    nadzoru autorskiego w zakresie inwestycji „Budowa szybu „Grzegorz” wraz z budową infrastruktury
                    powierzchniowej – dla Tauron Wydobycie S.A., ZG Sobieski&quot;,<br/>
                    - Opracowanie dokumentacji projektowej obejmującej następujący zakres tematyczny:<br/>
                    <br/>
                    - Wykonanie koncepcji przestrzenno – programowej Zakładu Górniczego Dębieńsko 1,<br/>
                    - Wykonanie projektu zagospodarowania złoża,<br/>
                    - Opracowanie raportu o oddziaływaniu inwestycji na środowisko wraz z uzyskaniem decyzji o
                    uwarunkowaniach środowiskowych. Zadanie było realizowane dla NWR KARBONIA S.A. w
                    Czerwionce-Leszczynach, itp.
                </p>
            </Container>

        )
    }
}

export default About;