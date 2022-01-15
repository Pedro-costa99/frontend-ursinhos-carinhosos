import React, { useEffect, useState, useMemo } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.css'
import Search from './../../components/Search';


const Home = () => {


    const [ursinhos, setUrsinhos] = useState([]);
    const [search, setSearch] = useState("");//valor pesquisado
    const [currentPage, setCurrentPage] = useState(1);//página atual, 1, 2, 3...
    const [itensPerPage, setItensPerPage] = useState(2);//itens que aparecem na página

    useEffect(() => {

        async function getContent() {

            try {

                fetch('https://api-ursinhos-carinhosos.herokuapp.com/ursinhos/')
                    .then(response => response.json())
                    .then(json => {
                        setUrsinhos(json);

                    });


            } catch (error) {
                console.error(error)

            }


        }

        getContent();

    }, []);

    const handleLoadMore = () => {
        setItensPerPage(itensPerPage + 2);
    };

    const ursinhosData = useMemo(() => {
        let computedUrsinhos = ursinhos;

        if (search) {
            computedUrsinhos = computedUrsinhos.filter(ursinho =>
                ursinho.nome.toLowerCase().includes(search.toLowerCase())
            );
        }
        //fatiando a página atual
        return computedUrsinhos.slice(
            (currentPage - 1) * itensPerPage,
            (currentPage - 1) * itensPerPage + itensPerPage
        );
    }, [ursinhos, currentPage, search, itensPerPage]);

    return (
        <>
            <Container>
                <Search className="mt-5"
                    onSearch={value => {
                        setSearch(value);
                        setCurrentPage(1);
                    }}
                />
            </Container>





            <main className={styles.main}>
                <Row className={styles.rowMain}>
                    {ursinhosData.map(urso => (
                        <Col key={urso.id} className='col-12 col-sm-6 justify-content-center'>
                            <Card className={styles.card} border="primary">
                                <Card.Body>
                                    <Card.Title className={styles.cardTitle}>{urso.nome}</Card.Title>
                                    <img src={urso.imagem} className="img-fluid" alt="Ursinho carinhoso" />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <br />
                </Row>
            </main>
            <div className={styles.containerButtonVerMais}>
                <button onClick={handleLoadMore} className={styles.buttonVerMais}>
                    Ver mais
                </button>
            </div>
        </>
    )
}

export default Home

