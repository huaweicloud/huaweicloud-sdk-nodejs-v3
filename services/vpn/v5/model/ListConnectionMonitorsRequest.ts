

export class ListConnectionMonitorsRequest {
    private 'vpn_connection_id'?: string;
    private 'enterprise_project_id'?: Array<string>;
    public constructor() { 
    }
    public withVpnConnectionId(vpnConnectionId: string): ListConnectionMonitorsRequest {
        this['vpn_connection_id'] = vpnConnectionId;
        return this;
    }
    public set vpnConnectionId(vpnConnectionId: string  | undefined) {
        this['vpn_connection_id'] = vpnConnectionId;
    }
    public get vpnConnectionId(): string | undefined {
        return this['vpn_connection_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListConnectionMonitorsRequest {
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