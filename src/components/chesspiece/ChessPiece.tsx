import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getChessPieceColour, getChessPieceIcon } from './chessPieceUtils';

/**
 * A type of chess piece
 */
export enum PieceType {
	Pawn,
	Castle,
	Knight,
	Bishop,
	Queen,
	King,
}

/**
 * The colour of a chess team
 */
export enum PieceColour {
	White,
	Black,
}

/**
 * Properties that define a chess piece
 */
export type ChessPieceProps = {
	colour: PieceColour,
	type: PieceType,
}

/**
 * Generates a JSX component to represent a chess piece.
 * 
 * @param props properties that define the chess piece to represent
 * @returns JSX component
 */
export const ChessPiece = (props: ChessPieceProps) => {
	return <FontAwesomeIcon icon={getChessPieceIcon(props.type)} color={getChessPieceColour(props.colour)} /> // TODO colours in CSS
}