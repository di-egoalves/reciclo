import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Autenticacao } from "./Autenticacao";
import { toast } from "react-hot-toast";

export const ProtecaoAssociacao = (props) => {
    const autenticacao = Autenticacao();
    const navigate = useNavigate();
    const resposta = autenticacao.token && autenticacao.roleNames[0] === "associacao";

    if (!autenticacao.token || !resposta) {
        toast.error("Acesso negado.", { position: "bottom-right", duration: 2000 });
        navigate("/error3");
        return <Navigate to="/error" />;
    }

    return <Outlet {...props} />;
};