

export class ListPlaybookInstancesRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public status?: string;
    public name?: string;
    private 'playbook_name'?: string;
    private 'dataclass_name'?: string;
    private 'dataobject_name'?: string;
    private 'trigger_type'?: string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(contentType?: string, workspaceId?: string, limit?: number, offset?: number) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withContentType(contentType: string): ListPlaybookInstancesRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListPlaybookInstancesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withStatus(status: string): ListPlaybookInstancesRequest {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ListPlaybookInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withPlaybookName(playbookName: string): ListPlaybookInstancesRequest {
        this['playbook_name'] = playbookName;
        return this;
    }
    public set playbookName(playbookName: string  | undefined) {
        this['playbook_name'] = playbookName;
    }
    public get playbookName(): string | undefined {
        return this['playbook_name'];
    }
    public withDataclassName(dataclassName: string): ListPlaybookInstancesRequest {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withDataobjectName(dataobjectName: string): ListPlaybookInstancesRequest {
        this['dataobject_name'] = dataobjectName;
        return this;
    }
    public set dataobjectName(dataobjectName: string  | undefined) {
        this['dataobject_name'] = dataobjectName;
    }
    public get dataobjectName(): string | undefined {
        return this['dataobject_name'];
    }
    public withTriggerType(triggerType: string): ListPlaybookInstancesRequest {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withFromDate(fromDate: string): ListPlaybookInstancesRequest {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): ListPlaybookInstancesRequest {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
    public withLimit(limit: number): ListPlaybookInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPlaybookInstancesRequest {
        this['offset'] = offset;
        return this;
    }
}