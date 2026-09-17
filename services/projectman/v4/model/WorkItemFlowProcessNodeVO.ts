import { WorkItemFlowNodeConfigVO } from './WorkItemFlowNodeConfigVO';


export class WorkItemFlowProcessNodeVO {
    public id?: string;
    public category?: string;
    private 'process_instance_id'?: string;
    private 'workflow_activity_id'?: string;
    public code?: string;
    public config?: WorkItemFlowNodeConfigVO;
    private 'enable_suspend'?: boolean;
    public constructor() { 
    }
    public withId(id: string): WorkItemFlowProcessNodeVO {
        this['id'] = id;
        return this;
    }
    public withCategory(category: string): WorkItemFlowProcessNodeVO {
        this['category'] = category;
        return this;
    }
    public withProcessInstanceId(processInstanceId: string): WorkItemFlowProcessNodeVO {
        this['process_instance_id'] = processInstanceId;
        return this;
    }
    public set processInstanceId(processInstanceId: string  | undefined) {
        this['process_instance_id'] = processInstanceId;
    }
    public get processInstanceId(): string | undefined {
        return this['process_instance_id'];
    }
    public withWorkflowActivityId(workflowActivityId: string): WorkItemFlowProcessNodeVO {
        this['workflow_activity_id'] = workflowActivityId;
        return this;
    }
    public set workflowActivityId(workflowActivityId: string  | undefined) {
        this['workflow_activity_id'] = workflowActivityId;
    }
    public get workflowActivityId(): string | undefined {
        return this['workflow_activity_id'];
    }
    public withCode(code: string): WorkItemFlowProcessNodeVO {
        this['code'] = code;
        return this;
    }
    public withConfig(config: WorkItemFlowNodeConfigVO): WorkItemFlowProcessNodeVO {
        this['config'] = config;
        return this;
    }
    public withEnableSuspend(enableSuspend: boolean): WorkItemFlowProcessNodeVO {
        this['enable_suspend'] = enableSuspend;
        return this;
    }
    public set enableSuspend(enableSuspend: boolean  | undefined) {
        this['enable_suspend'] = enableSuspend;
    }
    public get enableSuspend(): boolean | undefined {
        return this['enable_suspend'];
    }
}