import { ImageTranslateConfigCommon } from './ImageTranslateConfigCommon';


export class ImageTranslateConfig {
    public common: ImageTranslateConfigCommon;
    public constructor(common?: any) { 
        this['common'] = common;
    }
    public withCommon(common: ImageTranslateConfigCommon): ImageTranslateConfig {
        this['common'] = common;
        return this;
    }
}