import useTrailers from "../hooks/useTrailers";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return data ? (
    <video src={data[0].data[480]} poster={data[0].preview} controls />
  ) : null;
};

export default GameTrailer;
