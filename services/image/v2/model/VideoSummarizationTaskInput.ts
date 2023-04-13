import { VideoSummarizationTaskInputData } from './VideoSummarizationTaskInputData';


export class VideoSummarizationTaskInput {
    public type: string;
    public data: Array<VideoSummarizationTaskInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): VideoSummarizationTaskInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<VideoSummarizationTaskInputData>): VideoSummarizationTaskInput {
        this['data'] = data;
        return this;
    }
}