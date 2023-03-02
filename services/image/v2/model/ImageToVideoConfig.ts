import { ImageToVideoConfigCommon } from './ImageToVideoConfigCommon';


export class ImageToVideoConfig {
    public common?: ImageToVideoConfigCommon;
    public constructor() { 
    }
    public withCommon(common: ImageToVideoConfigCommon): ImageToVideoConfig {
        this['common'] = common;
        return this;
    }
}