'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Button from '@/components/Button';

export default function Home() {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsMetaMaskConnected(true);
        router.push('/vote')
      } else {
        console.error('MetaMask não encontrado. Certifique-se de que está instalado.');
      }
    } catch (error) {
      console.error('Erro ao conectar à MetaMask:', error);
    }
  };

  return (
    <main className="block justify-center items-center h-screen">
      <h1 className="text-center my-10 font-bold text-xl">Vote no paredão</h1>
      <div>
        <img
          src="https://s2-g1.glbimg.com/oQkh9RvVno32h68-r06gXaPoskI=/0x0:984x554/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/q/Q/pAo4MYTy2WU6K4pqNpTw/bbb.jpeg"
          className="mx-auto my-auto block"
          alt="Big Brother Brasil"
        />
      </div>
      {!isMetaMaskConnected && (
        <Button onClick={handleClick} label="Entre com sua Metamask" className="mt-4" />
      )}
      {isMetaMaskConnected && (
        <p className="mt-4 text-green-600">Conectado à MetaMask!</p>
      )}
    </main>
  );
}
