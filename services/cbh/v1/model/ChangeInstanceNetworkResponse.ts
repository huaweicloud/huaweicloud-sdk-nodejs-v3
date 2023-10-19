
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeInstanceNetworkResponse extends SdkResponse {
    public status?: string;
    private 'security_grp_status'?: string;
    private 'firewall_status'?: boolean;
    private 'public_eip_status'?: boolean;
    public nics?: boolean;
    private 'public_eip_statu'?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ChangeInstanceNetworkResponse {
        this['status'] = status;
        return this;
    }
    public withSecurityGrpStatus(securityGrpStatus: string): ChangeInstanceNetworkResponse {
        this['security_grp_status'] = securityGrpStatus;
        return this;
    }
    public set securityGrpStatus(securityGrpStatus: string  | undefined) {
        this['security_grp_status'] = securityGrpStatus;
    }
    public get securityGrpStatus(): string | undefined {
        return this['security_grp_status'];
    }
    public withFirewallStatus(firewallStatus: boolean): ChangeInstanceNetworkResponse {
        this['firewall_status'] = firewallStatus;
        return this;
    }
    public set firewallStatus(firewallStatus: boolean  | undefined) {
        this['firewall_status'] = firewallStatus;
    }
    public get firewallStatus(): boolean | undefined {
        return this['firewall_status'];
    }
    public withPublicEipStatus(publicEipStatus: boolean): ChangeInstanceNetworkResponse {
        this['public_eip_status'] = publicEipStatus;
        return this;
    }
    public set publicEipStatus(publicEipStatus: boolean  | undefined) {
        this['public_eip_status'] = publicEipStatus;
    }
    public get publicEipStatus(): boolean | undefined {
        return this['public_eip_status'];
    }
    public withNics(nics: boolean): ChangeInstanceNetworkResponse {
        this['nics'] = nics;
        return this;
    }
    public withPublicEipStatu(publicEipStatu: boolean): ChangeInstanceNetworkResponse {
        this['public_eip_statu'] = publicEipStatu;
        return this;
    }
    public set publicEipStatu(publicEipStatu: boolean  | undefined) {
        this['public_eip_statu'] = publicEipStatu;
    }
    public get publicEipStatu(): boolean | undefined {
        return this['public_eip_statu'];
    }
}