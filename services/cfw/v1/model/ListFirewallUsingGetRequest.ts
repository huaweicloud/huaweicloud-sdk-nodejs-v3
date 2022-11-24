

export class ListFirewallUsingGetRequest {
    private 'project_id': string | undefined;
    public offset: number;
    public limit: number;
    private 'service_type': ListFirewallUsingGetRequestServiceTypeEnum | undefined;
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListFirewallUsingGetRequestServiceTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
