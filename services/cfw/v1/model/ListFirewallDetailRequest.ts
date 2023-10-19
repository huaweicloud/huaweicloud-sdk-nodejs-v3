

export class ListFirewallDetailRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'service_type'?: ListFirewallDetailRequestServiceTypeEnum | number;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public constructor(projectId?: string, offset?: number, limit?: number, serviceType?: number) { 
        this['project_id'] = projectId;
        this['offset'] = offset;
        this['limit'] = limit;
        this['service_type'] = serviceType;
    }
    public withProjectId(projectId: string): ListFirewallDetailRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListFirewallDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFirewallDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withServiceType(serviceType: ListFirewallDetailRequestServiceTypeEnum | number): ListFirewallDetailRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListFirewallDetailRequestServiceTypeEnum | number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ListFirewallDetailRequestServiceTypeEnum | number | undefined {
        return this['service_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFirewallDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListFirewallDetailRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFirewallDetailRequestServiceTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
