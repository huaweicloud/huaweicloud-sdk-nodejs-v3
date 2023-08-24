

export class ListFirewallRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    public status?: ListFirewallRequestStatusEnum | string;
    private 'admin_state_up'?: boolean;
    private 'enterprise_project_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListFirewallRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListFirewallRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListFirewallRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListFirewallRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListFirewallRequestStatusEnum | string): ListFirewallRequest {
        this['status'] = status;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListFirewallRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListFirewallRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFirewallRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}
