import Link from "next/link";

interface LoginButtonProps {
  url: string;
  name: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ url, name }) => {
  return (
    <div>
      <button className="px-12 py-2 rounded-md border border-blue-500">
        <Link href={`/api/auth/${url}`}>{name}</Link>
      </button>
    </div>
  );
}

export default LoginButton;
