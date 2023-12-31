import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Autenticacao } from "./Autenticacao";
import { toast } from "react-hot-toast";

export const ProtecaoLogistica = (props) => {
    const autenticacao = Autenticacao();
    const navigate = useNavigate();
    const resposta = autenticacao.token && autenticacao.roleNames[0] === "operador";

    if (!autenticacao.token || !resposta) {
        toast.error("Acesso negado.", { position: "bottom-right", duration: 2000 });
        navigate("/error5");
        return <Navigate to="/error" />;
    }

    return <Outlet {...props} />;
};