import { FormFild } from '../componentes/FormFild'
import { Link } from 'react-router-dom'
export function ProductForm() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="h4 card-title mb-0">Cadastro de Produtos</h1>
                            </div>

                            <div className="card-body">
                                <form >
                                    <FormFild
                                        id="name"
                                        label="Nome do Produto"
                                    />
                                    <FormFild
                                        id="price"
                                        label="Preço"
                                        inputMode="decimal"
                                        autoComplete="off"
                                        
                                    />
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-primary">
                                            Salvar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <Link to="/produtos" className="btn btn-outline-primary">
                                Acessar Produtos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
