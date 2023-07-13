import { ShowSinkTaskDetailRespPartitions } from './ShowSinkTaskDetailRespPartitions';


export class ShowSinkTaskDetailRespTopicsInfo {
    public topic?: string;
    public partitions?: Array<ShowSinkTaskDetailRespPartitions>;
    public constructor() { 
    }
    public withTopic(topic: string): ShowSinkTaskDetailRespTopicsInfo {
        this['topic'] = topic;
        return this;
    }
    public withPartitions(partitions: Array<ShowSinkTaskDetailRespPartitions>): ShowSinkTaskDetailRespTopicsInfo {
        this['partitions'] = partitions;
        return this;
    }
}