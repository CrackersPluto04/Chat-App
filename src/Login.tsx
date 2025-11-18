import { useState } from "preact/hooks";
import "./Login.css";
import { TextInput } from "./TextInput";
import { chatService } from "./ChatService";
import { IconButton } from "./IconButton";

export function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [displayName, setDisplayName] = useState("");
    let [register, setRegister] = useState(false);

    function loginRegister() {
        if (register)
            chatService.send({ type: "register", email, password, displayName, staySignedIn: true });
        else
            chatService.send({ type: "login", email, password, staySignedIn: true });
    }

    return <div class="Login">
        <span class="logo" onClick={() => {
            localStorage["theme"] = localStorage["theme"] ? "" : "light";
            document.documentElement.classList.toggle("theme-light");
        }}>🗪</span>

        <TextInput value={email} onChange={setEmail} type="email" placeholder="Email (someone@example.com)" autofocus onEnter={loginRegister} />
        <TextInput value={password} onChange={setPassword} type="password" placeholder="Password" autofocus onEnter={loginRegister} />
        {register && <TextInput value={displayName} onChange={setDisplayName} type="text" placeholder="Display Name (Agent Smith)" autofocus onEnter={loginRegister} />}

        <IconButton iconName={register ? "person_edit" : "login"} content={register ? "Register" : "Login"} onClick={loginRegister} />

        <p>{register ? "Switch back to " : "Have no account yet? Go and "}
            <a href="" onClick={e => {
                e.preventDefault();
                setRegister(!register);
            }}>
                {register ? "Login" : "Register"}
            </a>
        </p>
    </div>
}