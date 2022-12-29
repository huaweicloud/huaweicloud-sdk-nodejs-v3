

export class ListFirewallUsingGetRequest {
    private 'project_id': string | undefined;
    public offset: number;
    public limit: number;
    private 'service_type': ListFirewallUsingGetRequestServiceTypeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(projectId?: any, offset?: any, limit?: any, serviceType?: any) { 
        this['project_id'] = projectId;
        this['offset'] = offset;
        this['limit'] = limit;
        this['service_type'] = serviceType;
    }
    public withProjectId(projectId: string): ListFirewallUsingGetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withOffset(offset: number): ListFirewallUsingGetRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFirewallUsingGetRequest {
        this['limit'] = limit;
        return this;
    }
    public withServiceType(serviceType: ListFirewallUsingGetRequestServiceTypeEnum): ListFirewallUsingGetRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListFirewallUsingGetRequestServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFirewallUsingGetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListFirewallUsingGetRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFirewallUsingGetRequestServiceTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
