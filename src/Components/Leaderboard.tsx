import React, { useEffect, useState } from "react";
import { LeaderboardEntry } from "./LeaderboardEntry";

interface ILeaderboardData {
  name: string;
  score: number;
}

export const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<ILeaderboardData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/game")
      .then((response) => response.json())
      .then((data) => setLeaderboardData(data));
      
    }, []);
    
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url('https://t3.ftcdn.net/jpg/02/87/87/18/360_F_287871802_GrrmM4RgBQt7hfIPYFTkRqaj2Fb8xvY4.jpg')]">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      <table className="w-1/2">
        <thead>
          <tr>
            <th className="py-2">Rank</th>
            <th className="py-2">Name</th>
            <th className="py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <LeaderboardEntry
              key={index}
              rank={index + 1}
              name={entry.name}
              score={entry.score}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
