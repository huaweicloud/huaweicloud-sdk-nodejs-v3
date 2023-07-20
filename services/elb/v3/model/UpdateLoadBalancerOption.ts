import { BandwidthRef } from './BandwidthRef';
import { PrepaidUpdateOption } from './PrepaidUpdateOption';
import { UpdateLoadbalancerAutoscalingOption } from './UpdateLoadbalancerAutoscalingOption';


export class UpdateLoadBalancerOption {
    public name?: string;
    private 'admin_state_up'?: boolean;
    public description?: string;
    private 'ipv6_vip_virsubnet_id'?: string;
    private 'vip_subnet_cidr_id'?: string;
    private 'vip_address'?: string;
    private 'l4_flavor_id'?: string;
    private 'l7_flavor_id'?: string;
    private 'ipv6_bandwidth'?: BandwidthRef;
    private 'ip_target_enable'?: boolean;
    private 'elb_virsubnet_ids'?: Array<string>;
    private 'deletion_protection_enable'?: boolean;
    private 'prepaid_options'?: PrepaidUpdateOption;
    public autoscaling?: UpdateLoadbalancerAutoscalingOption;
    private 'waf_failure_action'?: UpdateLoadBalancerOptionWafFailureActionEnum | string;
    private 'protection_status'?: UpdateLoadBalancerOptionProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateLoadBalancerOption {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateLoadBalancerOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDescription(description: string): UpdateLoadBalancerOption {
        this['description'] = description;
        return this;
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: string): UpdateLoadBalancerOption {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: string  | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId(): string | undefined {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: string): UpdateLoadBalancerOption {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: string  | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId(): string | undefined {
        return this['vip_subnet_cidr_id'];
    }
    public withVipAddress(vipAddress: string): UpdateLoadBalancerOption {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withL4FlavorId(l4FlavorId: string): UpdateLoadBalancerOption {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: string  | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId(): string | undefined {
        return this['l4_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): UpdateLoadBalancerOption {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): string | undefined {
        return this['l7_flavor_id'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: BandwidthRef): UpdateLoadBalancerOption {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: BandwidthRef  | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth(): BandwidthRef | undefined {
        return this['ipv6_bandwidth'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): UpdateLoadBalancerOption {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean  | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable(): boolean | undefined {
        return this['ip_target_enable'];
    }
    public withElbVirsubnetIds(elbVirsubnetIds: Array<string>): UpdateLoadBalancerOption {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
        return this;
    }
    public set elbVirsubnetIds(elbVirsubnetIds: Array<string>  | undefined) {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
    }
    public get elbVirsubnetIds(): Array<string> | undefined {
        return this['elb_virsubnet_ids'];
    }
    public withDeletionProtectionEnable(deletionProtectionEnable: boolean): UpdateLoadBalancerOption {
        this['deletion_protection_enable'] = deletionProtectionEnable;
        return this;
    }
    public set deletionProtectionEnable(deletionProtectionEnable: boolean  | undefined) {
        this['deletion_protection_enable'] = deletionProtectionEnable;
    }
    public get deletionProtectionEnable(): boolean | undefined {
        return this['deletion_protection_enable'];
    }
    public withPrepaidOptions(prepaidOptions: PrepaidUpdateOption): UpdateLoadBalancerOption {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: PrepaidUpdateOption  | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions(): PrepaidUpdateOption | undefined {
        return this['prepaid_options'];
    }
    public withAutoscaling(autoscaling: UpdateLoadbalancerAutoscalingOption): UpdateLoadBalancerOption {
        this['autoscaling'] = autoscaling;
        return this;
    }
    public withWafFailureAction(wafFailureAction: UpdateLoadBalancerOptionWafFailureActionEnum | string): UpdateLoadBalancerOption {
        this['waf_failure_action'] = wafFailureAction;
        return this;
    }
    public set wafFailureAction(wafFailureAction: UpdateLoadBalancerOptionWafFailureActionEnum | string  | undefined) {
        this['waf_failure_action'] = wafFailureAction;
    }
    public get wafFailureAction(): UpdateLoadBalancerOptionWafFailureActionEnum | string | undefined {
        return this['waf_failure_action'];
    }
    public withProtectionStatus(protectionStatus: UpdateLoadBalancerOptionProtectionStatusEnum | string): UpdateLoadBalancerOption {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: UpdateLoadBalancerOptionProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): UpdateLoadBalancerOptionProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): UpdateLoadBalancerOption {
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
export enum UpdateLoadBalancerOptionWafFailureActionEnum {
    DISCARD = 'discard',
    FORWARD = 'forward'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateLoadBalancerOptionProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
