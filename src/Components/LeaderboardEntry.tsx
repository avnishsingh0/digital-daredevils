import React from "react";

interface ILeaderboardEntryProps {
  rank: number;
  name: string;
  score: number;
}

export const LeaderboardEntry: React.FC<ILeaderboardEntryProps> = ({
  rank,
  name,
  score,
}) => {
  return (
    <tr className="bg-gray-200">
      <td className="py-2 px-4 text-center font-medium">{rank}</td>
      <td className="py-2 px-4 text-center">{name}</td>
      <td className="py-2 px-4 text-center font-medium">{score}</td>
    </tr>
  );
};
