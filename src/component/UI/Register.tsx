import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerFormSchema = z.object({
    username: z
        .string()
        .nonempty("Username tidak boleh kosong"),
    tanggalLahir: z
        .string()
        .nonempty("Tanggal lahir kosong"),
    tempatLahir: z
        .string()
        .nonempty("Tempat lahir tidak boleh kosong"),
    alamat: z
        .string()
        .nonempty("Alamat tidak boleh kosong"),
    nik: z
        .string()
        .length(16, "NIK Harus 16 karakter")
        .nonempty("NIK tidak boleh kosong"),
    bpjs: z
        .string()
        .min(9, "nomor BPJS minimal 9 karakter")
        .max(14, "nomor BPJS maksimal 14 karakter")
        .nonempty("nomor BPJS tidak boleh kosong")
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

interface hiddenForm {
    toggle: boolean;
    regis: () => void;
}

const Register = ({toggle, regis}: hiddenForm) => {
    const { register, handleSubmit, formState } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = handleSubmit((values) => {
        alert(`
                Pendaftaran Berhasil
                    username: ${values.username}
                    NIK: ${values.nik}
            `)
    })

    return (
        <form className={`flex flex-col items-center justify-center ${toggle ? "" : "hidden"}`} onSubmit={onSubmit}>
            <div className="flex flex-col items-center p-10 w-100 h-100 bg-slate-300 rounded-3xl">
                <input
                    type="text"
                    className="p-3 rounded-md bg-slate-100 w-full"
                    placeholder="Username" required
                    {...register("username")}
                />
                {formState.errors.username && (
                    <label className="text-sm text-red-500">{formState.errors.username.message}</label>
                )}
                <div className="flex gap-5 mt-5 w-full">
                    <div className="flex flex-col text-center justify-center w-[40%]">
                        <input
                            type="date"
                            className="p-3 rounded-md bg-slate-100 cursor-pointer"
                            required
                            {...register("tanggalLahir")}
                        />
                        {formState.errors.tanggalLahir && (
                            <label className="text-sm text-red-500">{formState.errors.tanggalLahir.message}</label>
                        )}
                    </div>
                    <div className="flex flex-col text-center justify-center w-[60%]">
                        <input
                            type="text"
                            className="p-3 rounded-md bg-slate-100 w-full"
                            placeholder="Tempat Lahir" required
                            {...register("tempatLahir")}
                        />
                        {formState.errors.tempatLahir && (
                            <label className="text-sm text-red-500">{formState.errors.tempatLahir.message}</label>
                        )}
                    </div>
                </div>
                <input
                    type="text"
                    className="p-3 rounded-md bg-slate-100 w-full mt-5"
                    placeholder="Alamat" required
                    {...register("alamat")}
                />
                {formState.errors.alamat && (
                    <label className="text-sm text-red-500">{formState.errors.alamat.message}</label>
                )}
                <div className="flex gap-5 mt-5 w-full">
                    <div className="flex flex-col text-center justify-center">
                        <input
                            type="text"
                            className="p-3 rounded-md bg-slate-100 w-full"
                            placeholder="NIK" required
                            {...register("nik")}
                        />
                        {formState.errors.nik && (
                            <label className="text-sm text-red-500">{formState.errors.nik.message}</label>
                        )}
                    </div>
                    <div className="flex flex-col text-center justify-center">
                        <input
                            type="text"
                            className="p-3 rounded-md bg-slate-100 w-full"
                            placeholder="No.BPJS"
                            {...register("bpjs")}
                        />
                        {formState.errors.bpjs && (
                            <label className="text-sm text-red-500">{formState.errors.bpjs.message}</label>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="p-3 mt-5 bg-blue-600 rounded-md text-white font-semibold w-full"
                >
                    Register
                </button>
            </div>
            <p className="p-3">Sudah terdaftar sebagai Pasien?  
                <a 
                    className="text-blue-600 font-medium hover:underline cursor-pointer ms-2"
                    onClick={regis}
                >
                    Login
                </a>
            </p>
        </form>
    )
}

export default Register;