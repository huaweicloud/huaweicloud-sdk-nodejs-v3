import { ObsObjInfo } from './ObsObjInfo';
import { ThumbnailPara } from './ThumbnailPara';


export class Thumbnail {
    public tar?: number;
    public out?: ObsObjInfo;
    public params: ThumbnailPara;
    public constructor(params?: any) { 
        this['params'] = params;
    }
    public withTar(tar: number): Thumbnail {
        this['tar'] = tar;
        return this;
    }
    public withOut(out: ObsObjInfo): Thumbnail {
        this['out'] = out;
        return this;
    }
    public withParams(params: ThumbnailPara): Thumbnail {
        this['params'] = params;
        return this;
    }
}