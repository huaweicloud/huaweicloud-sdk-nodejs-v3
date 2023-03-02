import { ImageHighresolutionMattingConfigCommon } from './ImageHighresolutionMattingConfigCommon';


export class ImageHighresolutionMattingConfig {
    public common: ImageHighresolutionMattingConfigCommon;
    public constructor(common?: any) { 
        this['common'] = common;
    }
    public withCommon(common: ImageHighresolutionMattingConfigCommon): ImageHighresolutionMattingConfig {
        this['common'] = common;
        return this;
    }
}