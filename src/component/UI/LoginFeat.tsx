import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
    username:  z.string(),
    nomorKesehatan: z.string().min(13, "nomor kesehatan minimal 13 karakter")
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

interface hiddenForm {
    toggle: boolean;
    regis: () => void;
}

const LoginFeat = ({toggle, regis}: hiddenForm) => {
    const {register,handleSubmit, formState} = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = handleSubmit((values) => {
        alert(`
                Username: ${values.username}
                NIK: ${values.nomorKesehatan}
            `)
    })

    return (
        <form className={`flex flex-col items-center justify-center ${toggle ? "hidden" : ""}`} onSubmit={onSubmit}>
            <div className="p-10 h-72 w-96 rounded-3xl bg-slate-300 flex flex-col items-center justify-center">
                <input
                    id="username"
                    type="text"
                    className="p-3 mt-5 rounded-md bg-slate-100 w-full"
                    placeholder="Username" required
                    {...register("username")}
                />
                {formState.errors.username && (
                    <p>{formState.errors.username.message}</p>
                )}
                <input
                    id="nomorKesehatan"
                    type="text"
                    className="p-3 mt-5 rounded-md bg-slate-100 w-full"
                    placeholder="NIK/No.BPJS" required
                    {...register("nomorKesehatan")}
                />
                {formState.errors.nomorKesehatan && (
                    <p>{formState.errors.nomorKesehatan.message}</p>
                )}
                <button
                    className="p-3 mt-5 bg-blue-600 rounded-md text-white font-semibold w-full"
                    type="submit"
                >
                    Login
                </button>
            </div>
            <p className="p-3">Pasien baru?  
                <a 
                    className="text-blue-600 font-medium hover:underline cursor-pointer ms-2"
                    onClick={regis}
                >
                    Registrasi
                </a>
            </p>
        </form>
    )
}

export default LoginFeat;