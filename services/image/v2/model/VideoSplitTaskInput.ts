import { VideoSplitTaskInputData } from './VideoSplitTaskInputData';


export class VideoSplitTaskInput {
    public type: string;
    public data: Array<VideoSplitTaskInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): VideoSplitTaskInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<VideoSplitTaskInputData>): VideoSplitTaskInput {
        this['data'] = data;
        return this;
    }
}