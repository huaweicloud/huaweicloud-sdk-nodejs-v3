import { BandwidthRef } from './BandwidthRef';
import { CreateLoadBalancerPublicIpOption } from './CreateLoadBalancerPublicIpOption';
import { CreateLoadbalancerAutoscalingOption } from './CreateLoadbalancerAutoscalingOption';
import { PrepaidCreateOption } from './PrepaidCreateOption';
import { Tag } from './Tag';


export class CreateLoadBalancerOption {
    public id?: string;
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    private 'vip_address'?: string;
    private 'vip_subnet_cidr_id'?: string;
    private 'ipv6_vip_virsubnet_id'?: string;
    public provider?: string;
    private 'l4_flavor_id'?: string;
    private 'l7_flavor_id'?: string;
    public guaranteed?: boolean;
    private 'vpc_id'?: string;
    private 'availability_zone_list'?: Array<string>;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'admin_state_up'?: boolean;
    private 'billing_info'?: string;
    private 'ipv6_bandwidth'?: BandwidthRef;
    private 'publicip_ids'?: Array<string>;
    public publicip?: CreateLoadBalancerPublicIpOption;
    private 'elb_virsubnet_ids'?: Array<string>;
    private 'ip_target_enable'?: boolean;
    private 'deletion_protection_enable'?: boolean;
    private 'prepaid_options'?: PrepaidCreateOption;
    public autoscaling?: CreateLoadbalancerAutoscalingOption;
    private 'waf_failure_action'?: CreateLoadBalancerOptionWafFailureActionEnum | string;
    private 'protection_status'?: CreateLoadBalancerOptionProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor(availabilityZoneList?: Array<string>) { 
        this['availability_zone_list'] = availabilityZoneList;
    }
    public withId(id: string): CreateLoadBalancerOption {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): CreateLoadBalancerOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): CreateLoadBalancerOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateLoadBalancerOption {
        this['description'] = description;
        return this;
    }
    public withVipAddress(vipAddress: string): CreateLoadBalancerOption {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: string): CreateLoadBalancerOption {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: string  | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId(): string | undefined {
        return this['vip_subnet_cidr_id'];
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: string): CreateLoadBalancerOption {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: string  | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId(): string | undefined {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withProvider(provider: string): CreateLoadBalancerOption {
        this['provider'] = provider;
        return this;
    }
    public withL4FlavorId(l4FlavorId: string): CreateLoadBalancerOption {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: string  | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId(): string | undefined {
        return this['l4_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): CreateLoadBalancerOption {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): string | undefined {
        return this['l7_flavor_id'];
    }
    public withGuaranteed(guaranteed: boolean): CreateLoadBalancerOption {
        this['guaranteed'] = guaranteed;
        return this;
    }
    public withVpcId(vpcId: string): CreateLoadBalancerOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): CreateLoadBalancerOption {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string>  | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList(): Array<string> | undefined {
        return this['availability_zone_list'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateLoadBalancerOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateLoadBalancerOption {
        this['tags'] = tags;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateLoadBalancerOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withBillingInfo(billingInfo: string): CreateLoadBalancerOption {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: BandwidthRef): CreateLoadBalancerOption {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: BandwidthRef  | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth(): BandwidthRef | undefined {
        return this['ipv6_bandwidth'];
    }
    public withPublicipIds(publicipIds: Array<string>): CreateLoadBalancerOption {
        this['publicip_ids'] = publicipIds;
        return this;
    }
    public set publicipIds(publicipIds: Array<string>  | undefined) {
        this['publicip_ids'] = publicipIds;
    }
    public get publicipIds(): Array<string> | undefined {
        return this['publicip_ids'];
    }
    public withPublicip(publicip: CreateLoadBalancerPublicIpOption): CreateLoadBalancerOption {
        this['publicip'] = publicip;
        return this;
    }
    public withElbVirsubnetIds(elbVirsubnetIds: Array<string>): CreateLoadBalancerOption {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
        return this;
    }
    public set elbVirsubnetIds(elbVirsubnetIds: Array<string>  | undefined) {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
    }
    public get elbVirsubnetIds(): Array<string> | undefined {
        return this['elb_virsubnet_ids'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): CreateLoadBalancerOption {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean  | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable(): boolean | undefined {
        return this['ip_target_enable'];
    }
    public withDeletionProtectionEnable(deletionProtectionEnable: boolean): CreateLoadBalancerOption {
        this['deletion_protection_enable'] = deletionProtectionEnable;
        return this;
    }
    public set deletionProtectionEnable(deletionProtectionEnable: boolean  | undefined) {
        this['deletion_protection_enable'] = deletionProtectionEnable;
    }
    public get deletionProtectionEnable(): boolean | undefined {
        return this['deletion_protection_enable'];
    }
    public withPrepaidOptions(prepaidOptions: PrepaidCreateOption): CreateLoadBalancerOption {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: PrepaidCreateOption  | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions(): PrepaidCreateOption | undefined {
        return this['prepaid_options'];
    }
    public withAutoscaling(autoscaling: CreateLoadbalancerAutoscalingOption): CreateLoadBalancerOption {
        this['autoscaling'] = autoscaling;
        return this;
    }
    public withWafFailureAction(wafFailureAction: CreateLoadBalancerOptionWafFailureActionEnum | string): CreateLoadBalancerOption {
        this['waf_failure_action'] = wafFailureAction;
        return this;
    }
    public set wafFailureAction(wafFailureAction: CreateLoadBalancerOptionWafFailureActionEnum | string  | undefined) {
        this['waf_failure_action'] = wafFailureAction;
    }
    public get wafFailureAction(): CreateLoadBalancerOptionWafFailureActionEnum | string | undefined {
        return this['waf_failure_action'];
    }
    public withProtectionStatus(protectionStatus: CreateLoadBalancerOptionProtectionStatusEnum | string): CreateLoadBalancerOption {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: CreateLoadBalancerOptionProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): CreateLoadBalancerOptionProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): CreateLoadBalancerOption {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateLoadBalancerOptionWafFailureActionEnum {
    DISCARD = 'discard',
    FORWARD = 'forward'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateLoadBalancerOptionProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
