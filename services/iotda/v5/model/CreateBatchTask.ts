import { TaskPolicy } from './TaskPolicy';


export class CreateBatchTask {
    private 'app_id'?: string;
    private 'task_name'?: string;
    private 'task_type'?: string;
    private 'task_mode'?: string;
    private 'task_ext_info'?: object;
    public targets?: Array<string>;
    private 'targets_filter'?: { [key: string]: object; };
    public document?: object;
    private 'task_policy'?: TaskPolicy;
    private 'document_source'?: string;
    public constructor(taskName?: string, taskType?: string) { 
        this['task_name'] = taskName;
        this['task_type'] = taskType;
    }
    public withAppId(appId: string): CreateBatchTask {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withTaskName(taskName: string): CreateBatchTask {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskType(taskType: string): CreateBatchTask {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTaskMode(taskMode: string): CreateBatchTask {
        this['task_mode'] = taskMode;
        return this;
    }
    public set taskMode(taskMode: string  | undefined) {
        this['task_mode'] = taskMode;
    }
    public get taskMode(): string | undefined {
        return this['task_mode'];
    }
    public withTaskExtInfo(taskExtInfo: object): CreateBatchTask {
        this['task_ext_info'] = taskExtInfo;
        return this;
    }
    public set taskExtInfo(taskExtInfo: object  | undefined) {
        this['task_ext_info'] = taskExtInfo;
    }
    public get taskExtInfo(): object | undefined {
        return this['task_ext_info'];
    }
    public withTargets(targets: Array<string>): CreateBatchTask {
        this['targets'] = targets;
        return this;
    }
    public withTargetsFilter(targetsFilter: { [key: string]: object; }): CreateBatchTask {
        this['targets_filter'] = targetsFilter;
        return this;
    }
    public set targetsFilter(targetsFilter: { [key: string]: object; }  | undefined) {
        this['targets_filter'] = targetsFilter;
    }
    public get targetsFilter(): { [key: string]: object; } | undefined {
        return this['targets_filter'];
    }
    public withDocument(document: object): CreateBatchTask {
        this['document'] = document;
        return this;
    }
    public withTaskPolicy(taskPolicy: TaskPolicy): CreateBatchTask {
        this['task_policy'] = taskPolicy;
        return this;
    }
    public set taskPolicy(taskPolicy: TaskPolicy  | undefined) {
        this['task_policy'] = taskPolicy;
    }
    public get taskPolicy(): TaskPolicy | undefined {
        return this['task_policy'];
    }
    public withDocumentSource(documentSource: string): CreateBatchTask {
        this['document_source'] = documentSource;
        return this;
    }
    public set documentSource(documentSource: string  | undefined) {
        this['document_source'] = documentSource;
    }
    public get documentSource(): string | undefined {
        return this['document_source'];
    }
}