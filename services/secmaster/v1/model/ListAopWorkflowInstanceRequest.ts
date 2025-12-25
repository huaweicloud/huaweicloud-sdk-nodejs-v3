

export class ListAopWorkflowInstanceRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: ListAopWorkflowInstanceRequestSortKeyEnum | string;
    private 'sort_dir'?: string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    private 'workflow_id'?: string;
    public id?: string;
    public name?: string;
    private 'dataobject_id'?: string;
    private 'dataclass_id'?: string;
    private 'playbook_id'?: string;
    private 'defence_id'?: string;
    public status?: string;
    private 'trigger_type'?: string;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListAopWorkflowInstanceRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListAopWorkflowInstanceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListAopWorkflowInstanceRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAopWorkflowInstanceRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: ListAopWorkflowInstanceRequestSortKeyEnum | string): ListAopWorkflowInstanceRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListAopWorkflowInstanceRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListAopWorkflowInstanceRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListAopWorkflowInstanceRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withFromDate(fromDate: string): ListAopWorkflowInstanceRequest {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): ListAopWorkflowInstanceRequest {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
    public withWorkflowId(workflowId: string): ListAopWorkflowInstanceRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withId(id: string): ListAopWorkflowInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAopWorkflowInstanceRequest {
        this['name'] = name;
        return this;
    }
    public withDataobjectId(dataobjectId: string): ListAopWorkflowInstanceRequest {
        this['dataobject_id'] = dataobjectId;
        return this;
    }
    public set dataobjectId(dataobjectId: string  | undefined) {
        this['dataobject_id'] = dataobjectId;
    }
    public get dataobjectId(): string | undefined {
        return this['dataobject_id'];
    }
    public withDataclassId(dataclassId: string): ListAopWorkflowInstanceRequest {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withPlaybookId(playbookId: string): ListAopWorkflowInstanceRequest {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withDefenceId(defenceId: string): ListAopWorkflowInstanceRequest {
        this['defence_id'] = defenceId;
        return this;
    }
    public set defenceId(defenceId: string  | undefined) {
        this['defence_id'] = defenceId;
    }
    public get defenceId(): string | undefined {
        return this['defence_id'];
    }
    public withStatus(status: string): ListAopWorkflowInstanceRequest {
        this['status'] = status;
        return this;
    }
    public withTriggerType(triggerType: string): ListAopWorkflowInstanceRequest {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAopWorkflowInstanceRequestSortKeyEnum {
    UPDATE_TIME = 'update_time',
    CREATE_TIME = 'create_time'
}
