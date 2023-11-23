import { AutoscalingRef } from './AutoscalingRef';
import { BandwidthRef } from './BandwidthRef';
import { EipInfo } from './EipInfo';
import { GlobalEipInfo } from './GlobalEipInfo';
import { ListenerRef } from './ListenerRef';
import { PoolRef } from './PoolRef';
import { PublicIpInfo } from './PublicIpInfo';
import { Tag } from './Tag';


export class LoadBalancer {
    public id?: string;
    public description?: string;
    private 'provisioning_status'?: string;
    private 'admin_state_up'?: boolean;
    public provider?: string;
    public pools?: Array<PoolRef>;
    public listeners?: Array<ListenerRef>;
    private 'operating_status'?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'vip_subnet_cidr_id'?: string;
    private 'vip_address'?: string;
    private 'vip_port_id'?: string;
    public tags?: Array<Tag>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public guaranteed?: boolean;
    private 'vpc_id'?: string;
    public eips?: Array<EipInfo>;
    private 'ipv6_vip_address'?: string;
    private 'ipv6_vip_virsubnet_id'?: string;
    private 'ipv6_vip_port_id'?: string;
    private 'availability_zone_list'?: Array<string>;
    private 'enterprise_project_id'?: string;
    private 'billing_info'?: string;
    private 'l4_flavor_id'?: string;
    private 'l4_scale_flavor_id'?: string;
    private 'l7_flavor_id'?: string;
    private 'l7_scale_flavor_id'?: string;
    public publicips?: Array<PublicIpInfo>;
    private 'global_eips'?: Array<GlobalEipInfo>;
    private 'elb_virsubnet_ids'?: Array<string>;
    private 'elb_virsubnet_type'?: LoadBalancerElbVirsubnetTypeEnum | string;
    private 'ip_target_enable'?: boolean;
    private 'frozen_scene'?: string;
    private 'ipv6_bandwidth'?: BandwidthRef;
    private 'deletion_protection_enable'?: boolean;
    public autoscaling?: AutoscalingRef;
    private 'public_border_group'?: string;
    private 'charge_mode'?: string;
    private 'waf_failure_action'?: string;
    private 'protection_status'?: LoadBalancerProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    private 'log_group_id'?: string;
    private 'log_topic_id'?: string;
    public constructor(id?: string, description?: string, provisioningStatus?: string, adminStateUp?: boolean, provider?: string, pools?: Array<PoolRef>, listeners?: Array<ListenerRef>, operatingStatus?: string, name?: string, projectId?: string, vipSubnetCidrId?: string, vipAddress?: string, vipPortId?: string, tags?: Array<Tag>, createdAt?: string, updatedAt?: string, guaranteed?: boolean, vpcId?: string, eips?: Array<EipInfo>, ipv6VipAddress?: string, ipv6VipVirsubnetId?: string, ipv6VipPortId?: string, availabilityZoneList?: Array<string>, enterpriseProjectId?: string, billingInfo?: string, l4FlavorId?: string, l4ScaleFlavorId?: string, l7FlavorId?: string, l7ScaleFlavorId?: string, publicips?: Array<PublicIpInfo>, globalEips?: Array<GlobalEipInfo>, elbVirsubnetIds?: Array<string>, elbVirsubnetType?: string, ipTargetEnable?: boolean, frozenScene?: string, ipv6Bandwidth?: BandwidthRef) { 
        this['id'] = id;
        this['description'] = description;
        this['provisioning_status'] = provisioningStatus;
        this['admin_state_up'] = adminStateUp;
        this['provider'] = provider;
        this['pools'] = pools;
        this['listeners'] = listeners;
        this['operating_status'] = operatingStatus;
        this['name'] = name;
        this['project_id'] = projectId;
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        this['vip_address'] = vipAddress;
        this['vip_port_id'] = vipPortId;
        this['tags'] = tags;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['guaranteed'] = guaranteed;
        this['vpc_id'] = vpcId;
        this['eips'] = eips;
        this['ipv6_vip_address'] = ipv6VipAddress;
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        this['ipv6_vip_port_id'] = ipv6VipPortId;
        this['availability_zone_list'] = availabilityZoneList;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['billing_info'] = billingInfo;
        this['l4_flavor_id'] = l4FlavorId;
        this['l4_scale_flavor_id'] = l4ScaleFlavorId;
        this['l7_flavor_id'] = l7FlavorId;
        this['l7_scale_flavor_id'] = l7ScaleFlavorId;
        this['publicips'] = publicips;
        this['global_eips'] = globalEips;
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
        this['elb_virsubnet_type'] = elbVirsubnetType;
        this['ip_target_enable'] = ipTargetEnable;
        this['frozen_scene'] = frozenScene;
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public withId(id: string): LoadBalancer {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): LoadBalancer {
        this['description'] = description;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancer {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
    public withAdminStateUp(adminStateUp: boolean): LoadBalancer {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withProvider(provider: string): LoadBalancer {
        this['provider'] = provider;
        return this;
    }
    public withPools(pools: Array<PoolRef>): LoadBalancer {
        this['pools'] = pools;
        return this;
    }
    public withListeners(listeners: Array<ListenerRef>): LoadBalancer {
        this['listeners'] = listeners;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): LoadBalancer {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): string | undefined {
        return this['operating_status'];
    }
    public withName(name: string): LoadBalancer {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): LoadBalancer {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: string): LoadBalancer {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: string  | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId(): string | undefined {
        return this['vip_subnet_cidr_id'];
    }
    public withVipAddress(vipAddress: string): LoadBalancer {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withVipPortId(vipPortId: string): LoadBalancer {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: string  | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId(): string | undefined {
        return this['vip_port_id'];
    }
    public withTags(tags: Array<Tag>): LoadBalancer {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: string): LoadBalancer {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): LoadBalancer {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withGuaranteed(guaranteed: boolean): LoadBalancer {
        this['guaranteed'] = guaranteed;
        return this;
    }
    public withVpcId(vpcId: string): LoadBalancer {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withEips(eips: Array<EipInfo>): LoadBalancer {
        this['eips'] = eips;
        return this;
    }
    public withIpv6VipAddress(ipv6VipAddress: string): LoadBalancer {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: string  | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress(): string | undefined {
        return this['ipv6_vip_address'];
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: string): LoadBalancer {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: string  | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId(): string | undefined {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withIpv6VipPortId(ipv6VipPortId: string): LoadBalancer {
        this['ipv6_vip_port_id'] = ipv6VipPortId;
        return this;
    }
    public set ipv6VipPortId(ipv6VipPortId: string  | undefined) {
        this['ipv6_vip_port_id'] = ipv6VipPortId;
    }
    public get ipv6VipPortId(): string | undefined {
        return this['ipv6_vip_port_id'];
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): LoadBalancer {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string>  | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList(): Array<string> | undefined {
        return this['availability_zone_list'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LoadBalancer {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBillingInfo(billingInfo: string): LoadBalancer {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withL4FlavorId(l4FlavorId: string): LoadBalancer {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: string  | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId(): string | undefined {
        return this['l4_flavor_id'];
    }
    public withL4ScaleFlavorId(l4ScaleFlavorId: string): LoadBalancer {
        this['l4_scale_flavor_id'] = l4ScaleFlavorId;
        return this;
    }
    public set l4ScaleFlavorId(l4ScaleFlavorId: string  | undefined) {
        this['l4_scale_flavor_id'] = l4ScaleFlavorId;
    }
    public get l4ScaleFlavorId(): string | undefined {
        return this['l4_scale_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): LoadBalancer {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): string | undefined {
        return this['l7_flavor_id'];
    }
    public withL7ScaleFlavorId(l7ScaleFlavorId: string): LoadBalancer {
        this['l7_scale_flavor_id'] = l7ScaleFlavorId;
        return this;
    }
    public set l7ScaleFlavorId(l7ScaleFlavorId: string  | undefined) {
        this['l7_scale_flavor_id'] = l7ScaleFlavorId;
    }
    public get l7ScaleFlavorId(): string | undefined {
        return this['l7_scale_flavor_id'];
    }
    public withPublicips(publicips: Array<PublicIpInfo>): LoadBalancer {
        this['publicips'] = publicips;
        return this;
    }
    public withGlobalEips(globalEips: Array<GlobalEipInfo>): LoadBalancer {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<GlobalEipInfo>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<GlobalEipInfo> | undefined {
        return this['global_eips'];
    }
    public withElbVirsubnetIds(elbVirsubnetIds: Array<string>): LoadBalancer {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
        return this;
    }
    public set elbVirsubnetIds(elbVirsubnetIds: Array<string>  | undefined) {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
    }
    public get elbVirsubnetIds(): Array<string> | undefined {
        return this['elb_virsubnet_ids'];
    }
    public withElbVirsubnetType(elbVirsubnetType: LoadBalancerElbVirsubnetTypeEnum | string): LoadBalancer {
        this['elb_virsubnet_type'] = elbVirsubnetType;
        return this;
    }
    public set elbVirsubnetType(elbVirsubnetType: LoadBalancerElbVirsubnetTypeEnum | string  | undefined) {
        this['elb_virsubnet_type'] = elbVirsubnetType;
    }
    public get elbVirsubnetType(): LoadBalancerElbVirsubnetTypeEnum | string | undefined {
        return this['elb_virsubnet_type'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): LoadBalancer {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean  | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable(): boolean | undefined {
        return this['ip_target_enable'];
    }
    public withFrozenScene(frozenScene: string): LoadBalancer {
        this['frozen_scene'] = frozenScene;
        return this;
    }
    public set frozenScene(frozenScene: string  | undefined) {
        this['frozen_scene'] = frozenScene;
    }
    public get frozenScene(): string | undefined {
        return this['frozen_scene'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: BandwidthRef): LoadBalancer {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: BandwidthRef  | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth(): BandwidthRef | undefined {
        return this['ipv6_bandwidth'];
    }
    public withDeletionProtectionEnable(deletionProtectionEnable: boolean): LoadBalancer {
        this['deletion_protection_enable'] = deletionProtectionEnable;
        return this;
    }
    public set deletionProtectionEnable(deletionProtectionEnable: boolean  | undefined) {
        this['deletion_protection_enable'] = deletionProtectionEnable;
    }
    public get deletionProtectionEnable(): boolean | undefined {
        return this['deletion_protection_enable'];
    }
    public withAutoscaling(autoscaling: AutoscalingRef): LoadBalancer {
        this['autoscaling'] = autoscaling;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): LoadBalancer {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withChargeMode(chargeMode: string): LoadBalancer {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withWafFailureAction(wafFailureAction: string): LoadBalancer {
        this['waf_failure_action'] = wafFailureAction;
        return this;
    }
    public set wafFailureAction(wafFailureAction: string  | undefined) {
        this['waf_failure_action'] = wafFailureAction;
    }
    public get wafFailureAction(): string | undefined {
        return this['waf_failure_action'];
    }
    public withProtectionStatus(protectionStatus: LoadBalancerProtectionStatusEnum | string): LoadBalancer {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: LoadBalancerProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): LoadBalancerProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): LoadBalancer {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
    public withLogGroupId(logGroupId: string): LoadBalancer {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): LoadBalancer {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string  | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId(): string | undefined {
        return this['log_topic_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LoadBalancerElbVirsubnetTypeEnum {
    IPV4 = 'ipv4',
    DUALSTACK = 'dualstack'
}
/**
    * @export
    * @enum {string}
    */
export enum LoadBalancerProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
