import { VideoCoverAnalysisTaskInputData } from './VideoCoverAnalysisTaskInputData';


export class VideoCoverAnalysisTaskInput {
    public type: string;
    public data: Array<VideoCoverAnalysisTaskInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): VideoCoverAnalysisTaskInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<VideoCoverAnalysisTaskInputData>): VideoCoverAnalysisTaskInput {
        this['data'] = data;
        return this;
    }
}