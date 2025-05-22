import { WorkitemStatus } from './WorkitemStatus';


export class WorkitemStatusRecords {
    private 'work_item_record_id'?: string;
    private 'work_item_id'?: string;
    private 'project_id'?: string;
    private 'work_item_statuses'?: Array<WorkitemStatus>;
    public constructor() { 
    }
    public withWorkItemRecordId(workItemRecordId: string): WorkitemStatusRecords {
        this['work_item_record_id'] = workItemRecordId;
        return this;
    }
    public set workItemRecordId(workItemRecordId: string  | undefined) {
        this['work_item_record_id'] = workItemRecordId;
    }
    public get workItemRecordId(): string | undefined {
        return this['work_item_record_id'];
    }
    public withWorkItemId(workItemId: string): WorkitemStatusRecords {
        this['work_item_id'] = workItemId;
        return this;
    }
    public set workItemId(workItemId: string  | undefined) {
        this['work_item_id'] = workItemId;
    }
    public get workItemId(): string | undefined {
        return this['work_item_id'];
    }
    public withProjectId(projectId: string): WorkitemStatusRecords {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkItemStatuses(workItemStatuses: Array<WorkitemStatus>): WorkitemStatusRecords {
        this['work_item_statuses'] = workItemStatuses;
        return this;
    }
    public set workItemStatuses(workItemStatuses: Array<WorkitemStatus>  | undefined) {
        this['work_item_statuses'] = workItemStatuses;
    }
    public get workItemStatuses(): Array<WorkitemStatus> | undefined {
        return this['work_item_statuses'];
    }
}