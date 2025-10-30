

export class ListDecoyPortAvailableHostRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public ports?: string;
    private 'os_type'?: ListDecoyPortAvailableHostRequestOsTypeEnum | string;
    private 'policy_id'?: string;
    public constructor(osType?: string) { 
        this['os_type'] = osType;
    }
    public withRegion(region: string): ListDecoyPortAvailableHostRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDecoyPortAvailableHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListDecoyPortAvailableHostRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDecoyPortAvailableHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withPorts(ports: string): ListDecoyPortAvailableHostRequest {
        this['ports'] = ports;
        return this;
    }
    public withOsType(osType: ListDecoyPortAvailableHostRequestOsTypeEnum | string): ListDecoyPortAvailableHostRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: ListDecoyPortAvailableHostRequestOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): ListDecoyPortAvailableHostRequestOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withPolicyId(policyId: string): ListDecoyPortAvailableHostRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDecoyPortAvailableHostRequestOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows'
}
