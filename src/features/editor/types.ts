import { fabric } from "fabric";
import { ITextboxOptions } from "fabric/fabric-impl";
import * as material from "material-colors";

export const JSON_KEYS = [
  "name",
  "gradientAngle",
  "selectable",
  "hasControls",
  "linkData",
  "editable",
  "extensionType",
  "extension",
];

export const filters = [
  "None",
  "Polaroid",
  "Sepia",
  "Kodachrome",
  "Contrast",
  "Brightness",
  "Greyscale",
  "Brownie",
  "Vintage",
  "Technicolor",
  "Pixelate",
  "Invert",
  "Blur",
  "Sharpen",
  "Emboss",
  "Remove Color",
  "Black And White",
  "Vibrance",
  "Blend Color",
  "Huerotate",
  "Resize",
  "Saturation",
  "Gamma",
];

export const fonts = [
  "Arial",
  "Arial Black",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
  "Palatino",
  "Bookman",
  "Comic Sans MS",
  "Impact",
  "Lucida Sans Unicode",
  "Geneva",
  "Lucida Console",
];

export const selectionDependentTools = [
  "fill",
  "font",
  "filter",
  "opacity",
  "remove-bg",
  "stroke-color",
  "stroke-width",
];

export const colors = [
  material.red["500"],
  material.pink["500"],
  material.purple["500"],
  material.deepPurple["500"],
  material.indigo["500"],
  material.blue["500"],
  material.lightBlue["500"],
  material.cyan["500"],
  material.teal["500"],
  material.green["500"],
  material.lightGreen["500"],
  material.lime["500"],
  material.yellow["500"],
  material.amber["500"],
  material.orange["500"],
  material.deepOrange["500"],
  material.brown["500"],
  material.blueGrey["500"],
  "transparent",
];

export type ActiveTool =
  | "select"
  | "shapes"
  | "text"
  | "images"
  | "draw"
  | "fill"
  | "stroke-color"
  | "stroke-width"
  | "font"
  | "opacity"
  | "filter"
  | "settings"
  | "ai"
  | "remove-bg"
  | "templates";

export const FILL_COLOR = "rgba(0,0,0,1)";
export const STROKE_COLOR = "rgba(0,0,0,1)";
export const STROKE_WIDTH = 2;
export const STROKE_DASH_ARRAY = [];
export const FONT_FAMILY = "Arial";
export const FONT_SIZE = 32;
export const FONT_WEIGHT = 400;

export const CIRCLE_OPTIONS = {
  radius: 225,
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
};

export const RECTANGLE_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const DIAMOND_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 600,
  height: 600,
  angle: 0,
};

export const TRIANGLE_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const TEXT_OPTIONS = {
  type: "textbox",
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  fontSize: FONT_SIZE,
  fontFamily: FONT_FAMILY,
};

export interface EditorHookProps {
  defaultState?: string;
  defaultWidth?: number;
  defaultHeight?: number;
  clearSelectionCallback?: () => void;
  saveCallback?: (values: {
    json: string;
    height: number;
    width: number;
  }) => void;
}

export type BuildEditorProps = {
  undo: () => void;
  redo: () => void;
  save: (skip?: boolean) => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  copy: () => void;
  paste: () => void;
  canvas: fabric.Canvas;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  setFillColor: (value: string) => void;
  setStrokeColor: (value: string) => void;
  setStrokeWidth: (value: number) => void;
  selectedObjects: fabric.Object[];
  strokeDashArray: number[];
  setStrokeDashArray: (value: number[]) => void;
  fontFamily: string;
  setFontFamily: (value: string) => void;
  autoZoom: () => void;
};

export interface Editor {
  savePng: () => void;
  saveSvg: () => void;
  saveJpg: () => void;
  saveJson: () => void;
  loadJson: (json: string) => void;
  onUndo: () => void;
  onRedo: () => void;
  canRedo: () => boolean;
  canUndo: () => boolean;
  changeFillColor: (value: string) => void;
  changeStrokeWidth: (value: number) => void;
  changeStrokeColor: (value: string) => void;
  getActiveFillColor: () => string;
  getActiveStrokeColor: () => string;
  getActiveStrokeWidth: () => number;
  canvas: fabric.Canvas;
  addCircle: () => void;
  addSoftRectangle: () => void;
  addRectangle: () => void;
  addTriangle: () => void;
  addInverseTriangle: () => void;
  addDiamond: () => void;
  selectedObjects: fabric.Object[];
  changeStrokeDashArray: (value: number[]) => void;
  getActiveStrokeDashArray: () => number[];
  bringForward: () => void;
  sendBackwards: () => void;
  changeOpacity: (value: number) => void;
  getActiveOpacity: () => number;
  addText: (value: string, options?: ITextboxOptions) => void;
  changeFontFamily: (value: string) => void;
  getActiveFontFamily: () => string;
  getActiveFontWeight: () => number;
  changeFontWeight: (value: number) => void;
  getActiveFontStyle: () => string;
  changeFontStyle: (value: string) => void;
  getActiveFontLinethrough: () => boolean;
  changeFontLinethrough: (value: boolean) => void;
  getActiveFontUnderline: () => boolean;
  changeFontUnderline: (value: boolean) => void;
  getActiveTextAlign: () => string;
  changeTextAlign: (value: string) => void;
  getActiveFontSize: () => number;
  changeFontSize: (value: number) => void;
  delete: () => void;
  addImage: (value: string) => void;
  changeImageFilter: (value: string) => void;
  onCopy: () => void;
  onPaste: () => void;
  enableDrawingMode: () => void;
  disableDrawingMode: () => void;
  changeBackground: (value: string) => void;
  changeSize: (value: { width: number; height: number }) => void;
  getWorkspace: () => fabric.Object | undefined;
  zoomIn: () => void;
  zoomOut: () => void;
  autoZoom: () => void;
}
