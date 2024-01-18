

export class ListVpnConnectionsRequest {
    private 'vpn_id'?: string;
    private 'eip_id'?: string;
    private 'vgw_ip'?: string;
    private 'vgw_id'?: string;
    private 'enterprise_project_id'?: Array<string>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withVpnId(vpnId: string): ListVpnConnectionsRequest {
        this['vpn_id'] = vpnId;
        return this;
    }
    public set vpnId(vpnId: string  | undefined) {
        this['vpn_id'] = vpnId;
    }
    public get vpnId(): string | undefined {
        return this['vpn_id'];
    }
    public withEipId(eipId: string): ListVpnConnectionsRequest {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
    public withVgwIp(vgwIp: string): ListVpnConnectionsRequest {
        this['vgw_ip'] = vgwIp;
        return this;
    }
    public set vgwIp(vgwIp: string  | undefined) {
        this['vgw_ip'] = vgwIp;
    }
    public get vgwIp(): string | undefined {
        return this['vgw_ip'];
    }
    public withVgwId(vgwId: string): ListVpnConnectionsRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListVpnConnectionsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVpnConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpnConnectionsRequest {
        this['marker'] = marker;
        return this;
    }
}