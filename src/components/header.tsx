import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <div className=" flex items-center justify-between border-b border-background/5 pb-2 text-muted">
      <div className="-mt-4">
        <img src={logo} alt="" />
      </div>

      <nav className="mt-4 space-x-4 text-sm">
        <a href="">Inicio</a>
        <a href="">Sobre-nos</a>
        <a href="">Serviços</a>
        <a href="">Contato</a>
      </nav>
    </div>
  )
}
