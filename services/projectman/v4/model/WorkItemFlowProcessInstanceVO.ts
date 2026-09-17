

export class WorkItemFlowProcessInstanceVO {
    public id?: string;
    private 'flow_state'?: number;
    private 'workflow_entry_id'?: string;
    public category?: string;
    public constructor() { 
    }
    public withId(id: string): WorkItemFlowProcessInstanceVO {
        this['id'] = id;
        return this;
    }
    public withFlowState(flowState: number): WorkItemFlowProcessInstanceVO {
        this['flow_state'] = flowState;
        return this;
    }
    public set flowState(flowState: number  | undefined) {
        this['flow_state'] = flowState;
    }
    public get flowState(): number | undefined {
        return this['flow_state'];
    }
    public withWorkflowEntryId(workflowEntryId: string): WorkItemFlowProcessInstanceVO {
        this['workflow_entry_id'] = workflowEntryId;
        return this;
    }
    public set workflowEntryId(workflowEntryId: string  | undefined) {
        this['workflow_entry_id'] = workflowEntryId;
    }
    public get workflowEntryId(): string | undefined {
        return this['workflow_entry_id'];
    }
    public withCategory(category: string): WorkItemFlowProcessInstanceVO {
        this['category'] = category;
        return this;
    }
}