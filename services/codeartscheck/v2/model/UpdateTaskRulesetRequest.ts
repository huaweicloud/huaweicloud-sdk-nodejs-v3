import { UpdateTaskRulesetItem } from './UpdateTaskRulesetItem';


export class UpdateTaskRulesetRequest {
    private 'task_id'?: string;
    public body?: Array<UpdateTaskRulesetItem>;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateTaskRulesetRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: Array<UpdateTaskRulesetItem>): UpdateTaskRulesetRequest {
        this['body'] = body;
        return this;
    }
}