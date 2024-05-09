
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeInstanceNetworkResponse extends SdkResponse {
    public status?: boolean;
    private 'security_grp_status'?: boolean;
    private 'firewall_status'?: boolean;
    private 'public_eip_status'?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): ChangeInstanceNetworkResponse {
        this['status'] = status;
        return this;
    }
    public withSecurityGrpStatus(securityGrpStatus: boolean): ChangeInstanceNetworkResponse {
        this['security_grp_status'] = securityGrpStatus;
        return this;
    }
    public set securityGrpStatus(securityGrpStatus: boolean  | undefined) {
        this['security_grp_status'] = securityGrpStatus;
    }
    public get securityGrpStatus(): boolean | undefined {
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
}