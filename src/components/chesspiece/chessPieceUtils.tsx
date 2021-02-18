import { PieceColour, PieceType } from "./ChessPiece";
import { faChessBishop, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook, IconDefinition } from '@fortawesome/free-solid-svg-icons';

/**
 * Retrieves the font awesome icon for the provided piece.
 * 
 * @param pieceType should be one of Pawn, Castle, Knight, Bishop, Queen or King
 * @returns a font awesome icon representing the piece if such an icon exists, otherwise undefined
 */
export const getChessPieceIcon = (pieceType: PieceType): IconDefinition => {
	switch (pieceType) {
		case PieceType.Pawn: {
			return faChessPawn;
		}
		case PieceType.Castle: {
			return faChessRook;
		}
		case PieceType.Knight: {
			return faChessKnight;
		}
		case PieceType.Bishop: {
			return faChessBishop;
		}
		case PieceType.Queen: {
			return faChessQueen;
		}
		case PieceType.King: {
			return faChessKing;
		}
	}
};

/**
 * Retrieves a string representation of the provided colour.
 * 
 * @param pieceColour should be either Black or White
 * @returns a string representation of the colour if there is such a representation, otherwise undefined
 */
export const getChessPieceColour = (pieceColour: PieceColour): string => {
	switch (pieceColour) {
		case PieceColour.White: {
			return "white";
		}
		case PieceColour.Black: {
			return "black";
		}
	}
};