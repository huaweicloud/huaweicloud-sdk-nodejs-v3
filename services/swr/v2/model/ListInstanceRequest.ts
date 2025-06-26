

export class ListInstanceRequest {
    public offset?: number;
    public limit?: number;
    public status?: ListInstanceRequestStatusEnum | string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListInstanceRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ListInstanceRequestStatusEnum | string): ListInstanceRequest {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstanceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceRequestStatusEnum {
    INITIAL = 'Initial',
    CREATING = 'Creating',
    RUNNING = 'Running',
    UNAVAILABLE = 'Unavailable'
}
