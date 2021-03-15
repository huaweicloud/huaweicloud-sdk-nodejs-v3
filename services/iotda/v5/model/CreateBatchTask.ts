import { TaskPolicy } from './TaskPolicy';


export class CreateBatchTask {
    private 'app_id'?: string | undefined;
    private 'task_name': string | undefined;
    private 'task_type': string | undefined;
    public targets?: Array<string>;
    private 'targets_filter'?: { [key: string]: object; } | undefined;
    public document?: object;
    private 'task_policy'?: TaskPolicy | undefined;
    private 'document_source'?: string | undefined;
    public constructor(taskName: any, taskType: any) { 
        this['task_name'] = taskName;
        this['task_type'] = taskType;
    }
    public withAppId(appId: string): CreateBatchTask {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withTaskName(taskName: string): CreateBatchTask {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withTaskType(taskType: string): CreateBatchTask {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withTargets(targets: Array<string>): CreateBatchTask {
        this['targets'] = targets;
        return this;
    }
    public withTargetsFilter(targetsFilter: { [key: string]: object; }): CreateBatchTask {
        this['targets_filter'] = targetsFilter;
        return this;
    }
    public set targetsFilter(targetsFilter: { [key: string]: object; } | undefined) {
        this['targets_filter'] = targetsFilter;
    }
    public get targetsFilter() {
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
    public set taskPolicy(taskPolicy: TaskPolicy | undefined) {
        this['task_policy'] = taskPolicy;
    }
    public get taskPolicy() {
        return this['task_policy'];
    }
    public withDocumentSource(documentSource: string): CreateBatchTask {
        this['document_source'] = documentSource;
        return this;
    }
    public set documentSource(documentSource: string | undefined) {
        this['document_source'] = documentSource;
    }
    public get documentSource() {
        return this['document_source'];
    }
}