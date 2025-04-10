

export class ListProtectionServersRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_name'?: string;
    private 'os_type'?: string;
    private 'host_ip'?: string;
    private 'app_type'?: ListProtectionServersRequestAppTypeEnum | string;
    private 'app_status'?: ListProtectionServersRequestAppStatusEnum | string;
    public constructor(enterpriseProjectId?: string, offset?: number, limit?: number, appStatus?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['offset'] = offset;
        this['limit'] = limit;
        this['app_status'] = appStatus;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListProtectionServersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListProtectionServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProtectionServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostName(hostName: string): ListProtectionServersRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withOsType(osType: string): ListProtectionServersRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withHostIp(hostIp: string): ListProtectionServersRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withAppType(appType: ListProtectionServersRequestAppTypeEnum | string): ListProtectionServersRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: ListProtectionServersRequestAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): ListProtectionServersRequestAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withAppStatus(appStatus: ListProtectionServersRequestAppStatusEnum | string): ListProtectionServersRequest {
        this['app_status'] = appStatus;
        return this;
    }
    public set appStatus(appStatus: ListProtectionServersRequestAppStatusEnum | string  | undefined) {
        this['app_status'] = appStatus;
    }
    public get appStatus(): ListProtectionServersRequestAppStatusEnum | string | undefined {
        return this['app_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProtectionServersRequestAppTypeEnum {
    JAVA = 'java'
}
/**
    * @export
    * @enum {string}
    */
export enum ListProtectionServersRequestAppStatusEnum {
    CLOSED = 'closed',
    OPENED = 'opened'
}
