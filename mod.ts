/**
 * Provides data structures and predefined themes for associating colors with musical notes.
 * @module
 */

/**
 * Represents a CSS color value (e.g., "#FF0000", "red", "rgba(0, 0, 0, 0.5)").
 * Can also be `null` to indicate no color for that note in a color theme.
 */
export type NoteColor = string | null;

/**
 * An array of 12 {@link NoteColor} values, where each index
 * corresponds to a specific pitch class in chromatic order
 * `null` values are typically used in themes
 * where only certain notes are to be assigned a color,
 * e.g., the root note.
 * @see NoteColor
 */
export type NoteColorGroup = [
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
  NoteColor,
];

/**
 * Defines a color theme for musical notes.
 * @see NoteColorGroup
 */
export interface NoteColorTheme {
  name: string;
  relative: boolean;
  colors: NoteColorGroup;
}

/**
 * A collection of predefined {@link NoteColorTheme} objects, keyed by a unique name.
 * @see NoteColorTheme
 */
export const noteColorThemes: Record<string, NoteColorTheme> = {
  musoDojo: {
    name: "Muso Dojo",
    relative: false,
    colors: [
      "#ED2929",
      "#9F000F",
      "#78C7C7",
      "#00008B",
      "#FF9933",
      "#EBEB19",
      "#286704",
      "#99CC33",
      "#660099",
      "#CC00FF",
      "#BF6A1F",
      "#FF9EE6",
    ],
  },
  boomwhackers: {
    name: "Boomwhackers",
    relative: false,
    colors: [
      "#E21C48",
      "#F26622",
      "#F99D1C",
      "#FFCC33",
      "#FFF32B",
      "#BCD85F",
      "#62BC47",
      "#009C95",
      "#0071BB",
      "#5E50A1",
      "#8D5BA6",
      "#CF3E96",
    ],
  },
  rootIsRed: {
    name: "Root is Red",
    relative: true,
    colors: [
      "#ED2929",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
};
