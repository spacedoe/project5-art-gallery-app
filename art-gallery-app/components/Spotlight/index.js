import ArtPiecePreview from "../ArtPieceRreview";
import ArtPieces from "../ArtPieces";

export default function Spotlight({ randomPiece }) {
  return (
    <>
      <ArtPiecePreview
        imageSource={randomPiece.imageSource}
        name={randomPiece.name}
        artist={randomPiece.artist}
      />
    </>
  );
}