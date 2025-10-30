

export class ListBackedupByHostIdRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_id'?: string;
    public status?: ListBackedupByHostIdRequestStatusEnum | string;
    public name?: string;
    private 'last_days'?: number;
    public constructor(offset?: number, limit?: number, hostId?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['host_id'] = hostId;
    }
    public withRegion(region: string): ListBackedupByHostIdRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBackedupByHostIdRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListBackedupByHostIdRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBackedupByHostIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostId(hostId: string): ListBackedupByHostIdRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withStatus(status: ListBackedupByHostIdRequestStatusEnum | string): ListBackedupByHostIdRequest {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ListBackedupByHostIdRequest {
        this['name'] = name;
        return this;
    }
    public withLastDays(lastDays: number): ListBackedupByHostIdRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBackedupByHostIdRequestStatusEnum {
    AVAILABLE = 'available',
    PROTECTING = 'protecting',
    DELETING = 'deleting',
    RESTORING = 'restoring',
    ERROR = 'error',
    WAITING_PROTECT = 'waiting_protect',
    WAITING_DELETE = 'waiting_delete',
    WAITING_RESTORE = 'waiting_restore'
}
