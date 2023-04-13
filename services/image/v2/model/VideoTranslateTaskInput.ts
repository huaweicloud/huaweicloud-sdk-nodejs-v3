import { VideoTranslateTaskInputData } from './VideoTranslateTaskInputData';


export class VideoTranslateTaskInput {
    public type: string;
    public data: Array<VideoTranslateTaskInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): VideoTranslateTaskInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<VideoTranslateTaskInputData>): VideoTranslateTaskInput {
        this['data'] = data;
        return this;
    }
}