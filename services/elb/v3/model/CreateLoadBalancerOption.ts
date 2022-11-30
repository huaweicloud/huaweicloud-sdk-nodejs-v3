import { BandwidthRef } from './BandwidthRef';
import { CreateLoadBalancerPublicIpOption } from './CreateLoadBalancerPublicIpOption';
import { CreateLoadbalancerAutoscalingOption } from './CreateLoadbalancerAutoscalingOption';
import { PrepaidCreateOption } from './PrepaidCreateOption';
import { Tag } from './Tag';


export class CreateLoadBalancerOption {
    public id?: string;
    private 'project_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'vip_address'?: string | undefined;
    private 'vip_subnet_cidr_id'?: string | undefined;
    private 'ipv6_vip_virsubnet_id'?: string | undefined;
    public provider?: string;
    private 'l4_flavor_id'?: string | undefined;
    private 'l7_flavor_id'?: string | undefined;
    public guaranteed?: boolean;
    private 'vpc_id'?: string | undefined;
    private 'availability_zone_list': Array<string> | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public tags?: Array<Tag>;
    private 'admin_state_up'?: boolean | undefined;
    private 'billing_info'?: string | undefined;
    private 'ipv6_bandwidth'?: BandwidthRef | undefined;
    private 'publicip_ids'?: Array<string> | undefined;
    public publicip?: CreateLoadBalancerPublicIpOption;
    private 'elb_virsubnet_ids'?: Array<string> | undefined;
    private 'ip_target_enable'?: boolean | undefined;
    private 'deletion_protection_enable'?: boolean | undefined;
    private 'prepaid_options'?: PrepaidCreateOption | undefined;
    public autoscaling?: CreateLoadbalancerAutoscalingOption;
    private 'waf_failure_action'?: CreateLoadBalancerOptionWafFailureActionEnum | undefined;
    public constructor(availabilityZoneList?: any) { 
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
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
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
    public set vipAddress(vipAddress: string | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress() {
        return this['vip_address'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: string): CreateLoadBalancerOption {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: string | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId() {
        return this['vip_subnet_cidr_id'];
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: string): CreateLoadBalancerOption {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: string | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId() {
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
    public set l4FlavorId(l4FlavorId: string | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId() {
        return this['l4_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): CreateLoadBalancerOption {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId() {
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
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): CreateLoadBalancerOption {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string> | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList() {
        return this['availability_zone_list'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateLoadBalancerOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
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
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withBillingInfo(billingInfo: string): CreateLoadBalancerOption {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo() {
        return this['billing_info'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: BandwidthRef): CreateLoadBalancerOption {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: BandwidthRef | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth() {
        return this['ipv6_bandwidth'];
    }
    public withPublicipIds(publicipIds: Array<string>): CreateLoadBalancerOption {
        this['publicip_ids'] = publicipIds;
        return this;
    }
    public set publicipIds(publicipIds: Array<string> | undefined) {
        this['publicip_ids'] = publicipIds;
    }
    public get publicipIds() {
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
    public set elbVirsubnetIds(elbVirsubnetIds: Array<string> | undefined) {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
    }
    public get elbVirsubnetIds() {
        return this['elb_virsubnet_ids'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): CreateLoadBalancerOption {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable() {
        return this['ip_target_enable'];
    }
    public withDeletionProtectionEnable(deletionProtectionEnable: boolean): CreateLoadBalancerOption {
        this['deletion_protection_enable'] = deletionProtectionEnable;
        return this;
    }
    public set deletionProtectionEnable(deletionProtectionEnable: boolean | undefined) {
        this['deletion_protection_enable'] = deletionProtectionEnable;
    }
    public get deletionProtectionEnable() {
        return this['deletion_protection_enable'];
    }
    public withPrepaidOptions(prepaidOptions: PrepaidCreateOption): CreateLoadBalancerOption {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: PrepaidCreateOption | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions() {
        return this['prepaid_options'];
    }
    public withAutoscaling(autoscaling: CreateLoadbalancerAutoscalingOption): CreateLoadBalancerOption {
        this['autoscaling'] = autoscaling;
        return this;
    }
    public withWafFailureAction(wafFailureAction: CreateLoadBalancerOptionWafFailureActionEnum): CreateLoadBalancerOption {
        this['waf_failure_action'] = wafFailureAction;
        return this;
    }
    public set wafFailureAction(wafFailureAction: CreateLoadBalancerOptionWafFailureActionEnum | undefined) {
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
export enum CreateLoadBalancerOptionWafFailureActionEnum {
    DISCARD = 'discard',
    FORWARD = 'forward'
}
