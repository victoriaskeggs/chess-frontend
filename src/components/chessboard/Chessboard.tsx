import { Grid } from "@material-ui/core"
import React from "react";
import { ChessSquare, ChessSquareProps } from "../chesssquare/ChessSquare";

/**
 * Properties that define a row of a chessboard
 */
type ChessRowProps = {
	rowProps: Array<ChessSquareProps>,
}

/**
 * Generates a JSX component to represent a row of a chessboard.
 * 
 * @param props properties that define the row to represent
 * @returns JSX component
 */
const ChessRow = (props: ChessRowProps) => {
	return <React.Fragment>
		{
			props.rowProps.map(squareProps =>
				<Grid item justify="center" xs={1}>
					<ChessSquare colour={squareProps.colour} pieceProps={squareProps.pieceProps} />
				</Grid>
			)
		}
	</React.Fragment>
};

/**
 * Properties that define a chessboard
 */
export type ChessboardProps = {
	gridProps: Array<Array<ChessSquareProps>>,
}

/**
 * Generates a JSX component to represent a chessboard.
 * 
 * @param props properties that define the chessboard to represent
 * @returns JSX component
 */
export const Chessboard = (props: ChessboardProps) => {
	return <Grid container justify="center">
		{
			props.gridProps.map(rowProps =>
				<Grid container justify="center" item xs={8}>
					<ChessRow rowProps={rowProps} />
				</Grid>
			)
		}
	</Grid>
};

/**
 * Properties that define a chessboard in its starting state.
 */
const initialProps: ChessboardProps = {
	gridProps: [], // TODO
};

/**
 * Generates a JSX component to represent a chessboard, with the pieces set up in their starting positions.
 * 
 * @returns JSX component
 */
export const StartingChessboard = () => {
	return <Chessboard gridProps={initialProps.gridProps} />;
};