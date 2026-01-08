import { ObsObjInfo } from './ObsObjInfo';
import { PicInfo } from './PicInfo';


export class ThumbnailsInfo {
    private 'pic_info'?: Array<PicInfo>;
    public output?: ObsObjInfo;
    private 'output_name'?: string;
    public constructor() { 
    }
    public withPicInfo(picInfo: Array<PicInfo>): ThumbnailsInfo {
        this['pic_info'] = picInfo;
        return this;
    }
    public set picInfo(picInfo: Array<PicInfo>  | undefined) {
        this['pic_info'] = picInfo;
    }
    public get picInfo(): Array<PicInfo> | undefined {
        return this['pic_info'];
    }
    public withOutput(output: ObsObjInfo): ThumbnailsInfo {
        this['output'] = output;
        return this;
    }
    public withOutputName(outputName: string): ThumbnailsInfo {
        this['output_name'] = outputName;
        return this;
    }
    public set outputName(outputName: string  | undefined) {
        this['output_name'] = outputName;
    }
    public get outputName(): string | undefined {
        return this['output_name'];
    }
}