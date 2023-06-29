import { ObsObjInfo } from './ObsObjInfo';


export class OutputThumbnailPara {
    private 'total_pictures'?: number | undefined;
    public width?: number;
    public height?: number;
    private 'file_name'?: string | undefined;
    public output?: ObsObjInfo;
    public constructor() { 
    }
    public withTotalPictures(totalPictures: number): OutputThumbnailPara {
        this['total_pictures'] = totalPictures;
        return this;
    }
    public set totalPictures(totalPictures: number | undefined) {
        this['total_pictures'] = totalPictures;
    }
    public get totalPictures() {
        return this['total_pictures'];
    }
    public withWidth(width: number): OutputThumbnailPara {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): OutputThumbnailPara {
        this['height'] = height;
        return this;
    }
    public withFileName(fileName: string): OutputThumbnailPara {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withOutput(output: ObsObjInfo): OutputThumbnailPara {
        this['output'] = output;
        return this;
    }
}