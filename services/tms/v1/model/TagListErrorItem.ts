

export class TagListErrorItem {
    private 'project_id'?: string;
    private 'resource_type'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(projectId?: string, resourceType?: string, errorCode?: string, errorMsg?: string) { 
        this['project_id'] = projectId;
        this['resource_type'] = resourceType;
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
    }
    public withProjectId(projectId: string): TagListErrorItem {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceType(resourceType: string): TagListErrorItem {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withErrorCode(errorCode: string): TagListErrorItem {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): TagListErrorItem {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}