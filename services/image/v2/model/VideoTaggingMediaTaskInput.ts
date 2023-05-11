import { VideoTaggingMediaTaskInputData } from './VideoTaggingMediaTaskInputData';


export class VideoTaggingMediaTaskInput {
    public type: string;
    public data: Array<VideoTaggingMediaTaskInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): VideoTaggingMediaTaskInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<VideoTaggingMediaTaskInputData>): VideoTaggingMediaTaskInput {
        this['data'] = data;
        return this;
    }
}