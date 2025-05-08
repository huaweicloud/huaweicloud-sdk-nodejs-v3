import { SmartConnectTaskReqSinkConfig } from './SmartConnectTaskReqSinkConfig';
import { SmartConnectTaskReqSourceConfig } from './SmartConnectTaskReqSourceConfig';


export class CreateSmartConnectTaskReq {
    private 'task_name'?: string;
    private 'start_later'?: boolean;
    public topics?: string;
    private 'topics_regex'?: string;
    private 'source_type'?: CreateSmartConnectTaskReqSourceTypeEnum | string;
    private 'source_task'?: SmartConnectTaskReqSourceConfig;
    private 'sink_type'?: CreateSmartConnectTaskReqSinkTypeEnum | string;
    private 'sink_task'?: SmartConnectTaskReqSinkConfig;
    public constructor() { 
    }
    public withTaskName(taskName: string): CreateSmartConnectTaskReq {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withStartLater(startLater: boolean): CreateSmartConnectTaskReq {
        this['start_later'] = startLater;
        return this;
    }
    public set startLater(startLater: boolean  | undefined) {
        this['start_later'] = startLater;
    }
    public get startLater(): boolean | undefined {
        return this['start_later'];
    }
    public withTopics(topics: string): CreateSmartConnectTaskReq {
        this['topics'] = topics;
        return this;
    }
    public withTopicsRegex(topicsRegex: string): CreateSmartConnectTaskReq {
        this['topics_regex'] = topicsRegex;
        return this;
    }
    public set topicsRegex(topicsRegex: string  | undefined) {
        this['topics_regex'] = topicsRegex;
    }
    public get topicsRegex(): string | undefined {
        return this['topics_regex'];
    }
    public withSourceType(sourceType: CreateSmartConnectTaskReqSourceTypeEnum | string): CreateSmartConnectTaskReq {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: CreateSmartConnectTaskReqSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): CreateSmartConnectTaskReqSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withSourceTask(sourceTask: SmartConnectTaskReqSourceConfig): CreateSmartConnectTaskReq {
        this['source_task'] = sourceTask;
        return this;
    }
    public set sourceTask(sourceTask: SmartConnectTaskReqSourceConfig  | undefined) {
        this['source_task'] = sourceTask;
    }
    public get sourceTask(): SmartConnectTaskReqSourceConfig | undefined {
        return this['source_task'];
    }
    public withSinkType(sinkType: CreateSmartConnectTaskReqSinkTypeEnum | string): CreateSmartConnectTaskReq {
        this['sink_type'] = sinkType;
        return this;
    }
    public set sinkType(sinkType: CreateSmartConnectTaskReqSinkTypeEnum | string  | undefined) {
        this['sink_type'] = sinkType;
    }
    public get sinkType(): CreateSmartConnectTaskReqSinkTypeEnum | string | undefined {
        return this['sink_type'];
    }
    public withSinkTask(sinkTask: SmartConnectTaskReqSinkConfig): CreateSmartConnectTaskReq {
        this['sink_task'] = sinkTask;
        return this;
    }
    public set sinkTask(sinkTask: SmartConnectTaskReqSinkConfig  | undefined) {
        this['sink_task'] = sinkTask;
    }
    public get sinkTask(): SmartConnectTaskReqSinkConfig | undefined {
        return this['sink_task'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSmartConnectTaskReqSourceTypeEnum {
    KAFKA_REPLICATOR_SOURCE = 'KAFKA_REPLICATOR_SOURCE',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSmartConnectTaskReqSinkTypeEnum {
    OBS_SINK = 'OBS_SINK',
    NONE = 'NONE'
}
