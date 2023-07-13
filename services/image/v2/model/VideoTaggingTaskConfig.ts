import { VideoTaggingTaskConfigCommon } from './VideoTaggingTaskConfigCommon';


export class VideoTaggingTaskConfig {
    public common?: VideoTaggingTaskConfigCommon;
    public constructor() { 
    }
    public withCommon(common: VideoTaggingTaskConfigCommon): VideoTaggingTaskConfig {
        this['common'] = common;
        return this;
    }
}