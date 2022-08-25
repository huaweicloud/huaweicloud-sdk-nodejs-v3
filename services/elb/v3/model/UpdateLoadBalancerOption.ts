import { BandwidthRef } from './BandwidthRef';
import { PrepaidUpdateOption } from './PrepaidUpdateOption';
import { UpdateLoadbalancerAutoscalingOption } from './UpdateLoadbalancerAutoscalingOption';


export class UpdateLoadBalancerOption {
    public name?: string;
    private 'admin_state_up'?: boolean | undefined;
    public description?: string;
    private 'ipv6_vip_virsubnet_id'?: string | undefined;
    private 'vip_subnet_cidr_id'?: string | undefined;
    private 'vip_address'?: string | undefined;
    private 'l4_flavor_id'?: string | undefined;
    private 'l7_flavor_id'?: string | undefined;
    private 'ipv6_bandwidth'?: BandwidthRef | undefined;
    private 'ip_target_enable'?: boolean | undefined;
    private 'elb_virsubnet_ids'?: Array<string> | undefined;
    private 'deletion_protection_enable'?: boolean | undefined;
    private 'prepaid_options'?: PrepaidUpdateOption | undefined;
    public autoscaling?: UpdateLoadbalancerAutoscalingOption;
    private 'waf_failure_action'?: UpdateLoadBalancerOptionWafFailureActionEnum | undefined;
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
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
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
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: string | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId() {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: string): UpdateLoadBalancerOption {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: string | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId() {
        return this['vip_subnet_cidr_id'];
    }
    public withVipAddress(vipAddress: string): UpdateLoadBalancerOption {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress() {
        return this['vip_address'];
    }
    public withL4FlavorId(l4FlavorId: string): UpdateLoadBalancerOption {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: string | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId() {
        return this['l4_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): UpdateLoadBalancerOption {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId() {
        return this['l7_flavor_id'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: BandwidthRef): UpdateLoadBalancerOption {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: BandwidthRef | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth() {
        return this['ipv6_bandwidth'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): UpdateLoadBalancerOption {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable() {
        return this['ip_target_enable'];
    }
    public withElbVirsubnetIds(elbVirsubnetIds: Array<string>): UpdateLoadBalancerOption {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
        return this;
    }
    public set elbVirsubnetIds(elbVirsubnetIds: Array<string> | undefined) {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
    }
    public get elbVirsubnetIds() {
        return this['elb_virsubnet_ids'];
    }
    public withDeletionProtectionEnable(deletionProtectionEnable: boolean): UpdateLoadBalancerOption {
        this['deletion_protection_enable'] = deletionProtectionEnable;
        return this;
    }
    public set deletionProtectionEnable(deletionProtectionEnable: boolean | undefined) {
        this['deletion_protection_enable'] = deletionProtectionEnable;
    }
    public get deletionProtectionEnable() {
        return this['deletion_protection_enable'];
    }
    public withPrepaidOptions(prepaidOptions: PrepaidUpdateOption): UpdateLoadBalancerOption {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: PrepaidUpdateOption | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions() {
        return this['prepaid_options'];
    }
    public withAutoscaling(autoscaling: UpdateLoadbalancerAutoscalingOption): UpdateLoadBalancerOption {
        this['autoscaling'] = autoscaling;
        return this;
    }
    public withWafFailureAction(wafFailureAction: UpdateLoadBalancerOptionWafFailureActionEnum): UpdateLoadBalancerOption {
        this['waf_failure_action'] = wafFailureAction;
        return this;
    }
    public set wafFailureAction(wafFailureAction: UpdateLoadBalancerOptionWafFailureActionEnum | undefined) {
        this['waf_failure_action'] = wafFailureAction;
    }
    public get wafFailureAction() {
        return this['waf_failure_action'];
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
