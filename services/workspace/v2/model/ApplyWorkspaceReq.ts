import { ApplySharedVpcDedicatedParam } from './ApplySharedVpcDedicatedParam';
import { ApplyWorkspaceAdDomain } from './ApplyWorkspaceAdDomain';
import { Subnet } from './Subnet';


export class ApplyWorkspaceReq {
    private 'ad_domains'?: ApplyWorkspaceAdDomain;
    private 'enterprise_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_ids'?: Array<Subnet>;
    private 'manage_subnet_cidr'?: string;
    private 'access_mode'?: ApplyWorkspaceReqAccessModeEnum | string;
    private 'apply_shared_vpc_dedicated_param'?: ApplySharedVpcDedicatedParam;
    private 'dedicated_subnets'?: string;
    private 'is_send_email'?: boolean;
    public constructor(adDomains?: ApplyWorkspaceAdDomain) { 
        this['ad_domains'] = adDomains;
    }
    public withAdDomains(adDomains: ApplyWorkspaceAdDomain): ApplyWorkspaceReq {
        this['ad_domains'] = adDomains;
        return this;
    }
    public set adDomains(adDomains: ApplyWorkspaceAdDomain  | undefined) {
        this['ad_domains'] = adDomains;
    }
    public get adDomains(): ApplyWorkspaceAdDomain | undefined {
        return this['ad_domains'];
    }
    public withEnterpriseId(enterpriseId: string): ApplyWorkspaceReq {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withVpcId(vpcId: string): ApplyWorkspaceReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetIds(subnetIds: Array<Subnet>): ApplyWorkspaceReq {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<Subnet>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<Subnet> | undefined {
        return this['subnet_ids'];
    }
    public withManageSubnetCidr(manageSubnetCidr: string): ApplyWorkspaceReq {
        this['manage_subnet_cidr'] = manageSubnetCidr;
        return this;
    }
    public set manageSubnetCidr(manageSubnetCidr: string  | undefined) {
        this['manage_subnet_cidr'] = manageSubnetCidr;
    }
    public get manageSubnetCidr(): string | undefined {
        return this['manage_subnet_cidr'];
    }
    public withAccessMode(accessMode: ApplyWorkspaceReqAccessModeEnum | string): ApplyWorkspaceReq {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: ApplyWorkspaceReqAccessModeEnum | string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): ApplyWorkspaceReqAccessModeEnum | string | undefined {
        return this['access_mode'];
    }
    public withApplySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam): ApplyWorkspaceReq {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
        return this;
    }
    public set applySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam  | undefined) {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
    }
    public get applySharedVpcDedicatedParam(): ApplySharedVpcDedicatedParam | undefined {
        return this['apply_shared_vpc_dedicated_param'];
    }
    public withDedicatedSubnets(dedicatedSubnets: string): ApplyWorkspaceReq {
        this['dedicated_subnets'] = dedicatedSubnets;
        return this;
    }
    public set dedicatedSubnets(dedicatedSubnets: string  | undefined) {
        this['dedicated_subnets'] = dedicatedSubnets;
    }
    public get dedicatedSubnets(): string | undefined {
        return this['dedicated_subnets'];
    }
    public withIsSendEmail(isSendEmail: boolean): ApplyWorkspaceReq {
        this['is_send_email'] = isSendEmail;
        return this;
    }
    public set isSendEmail(isSendEmail: boolean  | undefined) {
        this['is_send_email'] = isSendEmail;
    }
    public get isSendEmail(): boolean | undefined {
        return this['is_send_email'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplyWorkspaceReqAccessModeEnum {
    INTERNET = 'INTERNET',
    DEDICATED = 'DEDICATED',
    BOTH = 'BOTH'
}
