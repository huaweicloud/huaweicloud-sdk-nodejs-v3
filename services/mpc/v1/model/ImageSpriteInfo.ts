import { ObsObjInfo } from './ObsObjInfo';


export class ImageSpriteInfo {
    private 'row_count'?: number;
    private 'column_count'?: number;
    private 'total_count'?: number;
    public width?: number;
    public height?: number;
    private 'output_image_name'?: Array<string>;
    private 'output_webvtt_name'?: string;
    public output?: ObsObjInfo;
    public constructor() { 
    }
    public withRowCount(rowCount: number): ImageSpriteInfo {
        this['row_count'] = rowCount;
        return this;
    }
    public set rowCount(rowCount: number  | undefined) {
        this['row_count'] = rowCount;
    }
    public get rowCount(): number | undefined {
        return this['row_count'];
    }
    public withColumnCount(columnCount: number): ImageSpriteInfo {
        this['column_count'] = columnCount;
        return this;
    }
    public set columnCount(columnCount: number  | undefined) {
        this['column_count'] = columnCount;
    }
    public get columnCount(): number | undefined {
        return this['column_count'];
    }
    public withTotalCount(totalCount: number): ImageSpriteInfo {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withWidth(width: number): ImageSpriteInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ImageSpriteInfo {
        this['height'] = height;
        return this;
    }
    public withOutputImageName(outputImageName: Array<string>): ImageSpriteInfo {
        this['output_image_name'] = outputImageName;
        return this;
    }
    public set outputImageName(outputImageName: Array<string>  | undefined) {
        this['output_image_name'] = outputImageName;
    }
    public get outputImageName(): Array<string> | undefined {
        return this['output_image_name'];
    }
    public withOutputWebvttName(outputWebvttName: string): ImageSpriteInfo {
        this['output_webvtt_name'] = outputWebvttName;
        return this;
    }
    public set outputWebvttName(outputWebvttName: string  | undefined) {
        this['output_webvtt_name'] = outputWebvttName;
    }
    public get outputWebvttName(): string | undefined {
        return this['output_webvtt_name'];
    }
    public withOutput(output: ObsObjInfo): ImageSpriteInfo {
        this['output'] = output;
        return this;
    }
}