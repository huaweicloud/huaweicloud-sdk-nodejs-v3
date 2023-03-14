import { ImageVariationTaskConfigCommon } from './ImageVariationTaskConfigCommon';


export class ImageVariationTaskConfig {
    public common: ImageVariationTaskConfigCommon;
    public constructor(common?: any) { 
        this['common'] = common;
    }
    public withCommon(common: ImageVariationTaskConfigCommon): ImageVariationTaskConfig {
        this['common'] = common;
        return this;
    }
}