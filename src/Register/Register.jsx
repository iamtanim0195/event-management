import { useContext, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../Hook/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false);

    const handleRegistration = (e) => {


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        //craet user
        createUser(email, password,)
            .then(result => { console.log(result.user) })
            .catch(error => { console.log(error) })

        // if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        //     setError("the password must have 6 characters and a capital letter also a special letter")
        //     return
        // } else {
        //     setError('');
        //     if (email) {
        //         signUp(email, password).then(result => console.log(result.user))
        //     }

        // }
    }
    return (
        <div>
            <form onSubmit={handleRegistration} className="mx-auto md:w-1/2 p-5 flex flex-col gap-1 ">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" className="input input-bordered input-primary w-full " type="email" name="email" required /><br />
                <div className="flex">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        className="input input-bordered input-primary w-full "
                        type={showPass ? "text" : "password"}
                        name="password"
                        required />
                    <span
                        className="relative top-4 right-6 w-0"
                        onClick={() => setShowPass(!showPass)}>
                        {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                </div>
                <br />
                <div>
                    <input className="self-start bg-black" type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept our terms and condition</label>
                </div>
                <br />
                <p className='text-xl text-red-600'>{error}</p>
                <input className="btn btn-active btn-secondary" type="submit" name="submit" /><br />

            </form>
        </div>
    )
}

export default Register;