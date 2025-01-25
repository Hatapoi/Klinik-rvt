const LoginFeat = () => {
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="h-72 w-80 rounded-3xl bg-slate-300 flex flex-col items-center justify-center gap-5">
                <input type="text" className="p-3 rounded-md bg-slate-100" placeholder="Username" />
                <input type="number" className="p-3 rounded-md bg-slate-100" placeholder="NIK/No.BPJS" />
                <button className="p-3 bg-blue-600 w-52 rounded-md text-white font-semibold">Login</button>
            </div>
            <p className="p-3">Pasien baru?  <a href="#" className="text-blue-600 font-medium hover:underline">Registrasi</a></p>
        </div>
    )
}

export default LoginFeat;