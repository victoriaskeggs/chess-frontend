import { Box } from '@material-ui/core';
import { ChessPiece, ChessPieceProps } from '../chesspiece/ChessPiece';
import { getChessSquareColour } from './chessSquareUtils';

/**
 * The colour of a chess square
 */
export enum SquareColour {
	White,
	Black,
}

/**
 * Properties that define a chess square
 */
export type ChessSquareProps = {
	colour: SquareColour,
	pieceProps: ChessPieceProps | undefined,
}

/**
 * Generates a JSX component to represent a chess square, which may contain a chess piece.
 * 
 * @param props properties that define the chess square to represent
 * @returns JSX component
 */
export const ChessSquare = (props: ChessSquareProps) => {
	let piece: JSX.Element | undefined;
	if (props.pieceProps) {
		piece = <ChessPiece colour={props.pieceProps.colour} type={props.pieceProps.type}></ChessPiece>;
	}
	return <Box color={getChessSquareColour(props.colour)}> {piece} </Box> // TODO colours in CSS
};