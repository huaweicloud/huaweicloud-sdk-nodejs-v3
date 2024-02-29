import { SmartConnectTaskRespSinkConfig } from './SmartConnectTaskRespSinkConfig';
import { SmartConnectTaskRespSourceConfig } from './SmartConnectTaskRespSourceConfig';


export class SmartConnectTaskEntity {
    private 'task_name'?: string;
    public topics?: string;
    private 'source_type'?: string;
    private 'source_task'?: SmartConnectTaskRespSourceConfig;
    private 'sink_type'?: string;
    private 'sink_task'?: SmartConnectTaskRespSinkConfig;
    public id?: string;
    public status?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withTaskName(taskName: string): SmartConnectTaskEntity {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTopics(topics: string): SmartConnectTaskEntity {
        this['topics'] = topics;
        return this;
    }
    public withSourceType(sourceType: string): SmartConnectTaskEntity {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withSourceTask(sourceTask: SmartConnectTaskRespSourceConfig): SmartConnectTaskEntity {
        this['source_task'] = sourceTask;
        return this;
    }
    public set sourceTask(sourceTask: SmartConnectTaskRespSourceConfig  | undefined) {
        this['source_task'] = sourceTask;
    }
    public get sourceTask(): SmartConnectTaskRespSourceConfig | undefined {
        return this['source_task'];
    }
    public withSinkType(sinkType: string): SmartConnectTaskEntity {
        this['sink_type'] = sinkType;
        return this;
    }
    public set sinkType(sinkType: string  | undefined) {
        this['sink_type'] = sinkType;
    }
    public get sinkType(): string | undefined {
        return this['sink_type'];
    }
    public withSinkTask(sinkTask: SmartConnectTaskRespSinkConfig): SmartConnectTaskEntity {
        this['sink_task'] = sinkTask;
        return this;
    }
    public set sinkTask(sinkTask: SmartConnectTaskRespSinkConfig  | undefined) {
        this['sink_task'] = sinkTask;
    }
    public get sinkTask(): SmartConnectTaskRespSinkConfig | undefined {
        return this['sink_task'];
    }
    public withId(id: string): SmartConnectTaskEntity {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): SmartConnectTaskEntity {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): SmartConnectTaskEntity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}