import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      setTimeout(() => {
        setShowDashboard(true);
      }, 2000); // Simulates loading
    }
  }, [router]);

  const user =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <header className="flex justify-end p-4 bg-gray-800 text-white">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow">
        {showDashboard ? (
          <h1 className="text-3xl font-bold text-white">
            Welcome to MetricCare Project!
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-white">
            Welcome to {user?.email}
          </h1>
        )}
      </main>
    </div>
  );
}
