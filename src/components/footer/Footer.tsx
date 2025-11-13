import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
  const data = new Date().getFullYear()

  return (
    <div className="flex justify-center bg-[#0c0b14] text-white py-6">
      <div className="container flex flex-col items-center px-6 gap-3">

        <p className="text-lg">
          Acesse nossas redes sociais
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/carina-bentlin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogoIcon size={32} weight="bold" />
          </a>

          <a
            href="https://www.instagram.com/carinabentlin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon size={32} weight="bold" />
          </a>

          <a
            href="https://github.com/carinabentlin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogoIcon size={32} weight="bold" />
          </a>
        </div>

        <p className="text-xs opacity-80 mt-2">
          Blog Pessoal Generation | Copyright: {data}
        </p>

      </div>
    </div>
  )
}

export default Footer
