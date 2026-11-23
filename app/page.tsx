'use client'

import { useState } from "react"

export default function Home() {
  const [qtd, setQtd] = useState(0)
  const [nome,setNome] = useState<string>()

  function cliqueBotao() {
    let variavelTemporaria = qtd
    variavelTemporaria = variavelTemporaria + 1
    setQtd(variavelTemporaria)
  }

  return(
    <div className="bg-slate-200 w-full h-screen flex flex-col">
      <header className="font-bold bg-slate-300 rounded-3xl w-100 h-20 flex items-center gap-4 justify-center">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRMTe5OAFcDnbBATp_P507TJB-lSin1aSz08gNGK8IboKECFgj20_ZtM&s=10"}
          width={60}
          className="rounded-full"
        />
        <h1 className="text-xl text-green-700"> TRAINEE SOLARES</h1>
        <h2 className="text-xl text-green-800"> 2026</h2>
  
      </header>
        
      <header>  
        
      </header>

      <input 
      type="text"
      placeholder="Digite seu nome aqui"
      value={nome}
      onChange={(valor) => setNome(valor.target.value)}
      />

     

      <button className="bg-blue-800 text-white p-1 rounded-md w-52" onClick={cliqueBotao}> 
        Botão
      </button>
    </div>
  )
}