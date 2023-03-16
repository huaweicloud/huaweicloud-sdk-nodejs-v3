import { VideoObjectMaskingTaskConfigCommon } from './VideoObjectMaskingTaskConfigCommon';


export class VideoObjectMaskingTaskConfig {
    public common: VideoObjectMaskingTaskConfigCommon;
    public constructor(common?: any) { 
        this['common'] = common;
    }
    public withCommon(common: VideoObjectMaskingTaskConfigCommon): VideoObjectMaskingTaskConfig {
        this['common'] = common;
        return this;
    }
}