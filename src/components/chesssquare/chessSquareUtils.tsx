import { SquareColour } from "./ChessSquare";

/**
 * Retrieves a string representation of the provided colour.
 * 
 * @param squareColour should be either Black or White
 * @returns a string representation of the colour if there is such a representation, otherwise undefined
 */
export const getChessSquareColour = (squareColour: SquareColour): string => {
	switch (squareColour) {
		case SquareColour.White: {
			return "white";
		}
		case SquareColour.Black: {
			return "black";
		}
	}
};