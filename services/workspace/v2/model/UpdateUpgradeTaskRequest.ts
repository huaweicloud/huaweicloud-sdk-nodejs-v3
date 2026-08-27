import { UpdateScheduledUpgradeTaskRequestBody } from './UpdateScheduledUpgradeTaskRequestBody';


export class UpdateUpgradeTaskRequest {
    private 'task_id'?: string;
    public body?: UpdateScheduledUpgradeTaskRequestBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateUpgradeTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: UpdateScheduledUpgradeTaskRequestBody): UpdateUpgradeTaskRequest {
        this['body'] = body;
        return this;
    }
}