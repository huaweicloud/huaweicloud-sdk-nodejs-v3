import { VideoTranslateConfigCommon } from './VideoTranslateConfigCommon';


export class VideoTranslateConfig {
    public common?: VideoTranslateConfigCommon;
    public constructor() { 
    }
    public withCommon(common: VideoTranslateConfigCommon): VideoTranslateConfig {
        this['common'] = common;
        return this;
    }
}