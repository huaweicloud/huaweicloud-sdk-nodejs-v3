import { AutoscalingRef } from './AutoscalingRef';
import { BandwidthRef } from './BandwidthRef';
import { EipInfo } from './EipInfo';
import { GlobalEipInfo } from './GlobalEipInfo';
import { ListenerRef } from './ListenerRef';
import { PoolRef } from './PoolRef';
import { PublicIpInfo } from './PublicIpInfo';
import { Tag } from './Tag';


export class LoadBalancer {
    public id: string;
    public description: string;
    private 'provisioning_status': string | undefined;
    private 'admin_state_up': boolean | undefined;
    public provider: string;
    public pools: Array<PoolRef>;
    public listeners: Array<ListenerRef>;
    private 'operating_status': string | undefined;
    public name: string;
    private 'project_id': string | undefined;
    private 'vip_subnet_cidr_id': string | undefined;
    private 'vip_address': string | undefined;
    private 'vip_port_id': string | undefined;
    public tags: Array<Tag>;
    private 'created_at': string | undefined;
    private 'updated_at': string | undefined;
    public guaranteed: boolean;
    private 'vpc_id': string | undefined;
    public eips: Array<EipInfo>;
    private 'ipv6_vip_address': string | undefined;
    private 'ipv6_vip_virsubnet_id': string | undefined;
    private 'ipv6_vip_port_id': string | undefined;
    private 'availability_zone_list': Array<string> | undefined;
    private 'enterprise_project_id': string | undefined;
    private 'billing_info': string | undefined;
    private 'l4_flavor_id': string | undefined;
    private 'l4_scale_flavor_id': string | undefined;
    private 'l7_flavor_id': string | undefined;
    private 'l7_scale_flavor_id': string | undefined;
    public publicips: Array<PublicIpInfo>;
    private 'global_eips': Array<GlobalEipInfo> | undefined;
    private 'elb_virsubnet_ids': Array<string> | undefined;
    private 'elb_virsubnet_type': LoadBalancerElbVirsubnetTypeEnum | undefined;
    private 'ip_target_enable': boolean | undefined;
    private 'frozen_scene': string | undefined;
    private 'ipv6_bandwidth': BandwidthRef | undefined;
    private 'deletion_protection_enable'?: boolean | undefined;
    public autoscaling?: AutoscalingRef;
    private 'public_border_group'?: string | undefined;
    private 'waf_failure_action'?: string | undefined;
    public constructor(id?: any, description?: any, provisioningStatus?: any, adminStateUp?: any, provider?: any, pools?: any, listeners?: any, operatingStatus?: any, name?: any, projectId?: any, vipSubnetCidrId?: any, vipAddress?: any, vipPortId?: any, tags?: any, createdAt?: any, updatedAt?: any, guaranteed?: any, vpcId?: any, eips?: any, ipv6VipAddress?: any, ipv6VipVirsubnetId?: any, ipv6VipPortId?: any, availabilityZoneList?: any, enterpriseProjectId?: any, billingInfo?: any, l4FlavorId?: any, l4ScaleFlavorId?: any, l7FlavorId?: any, l7ScaleFlavorId?: any, publicips?: any, globalEips?: any, elbVirsubnetIds?: any, elbVirsubnetType?: any, ipTargetEnable?: any, frozenScene?: any, ipv6Bandwidth?: any) { 
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
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withAdminStateUp(adminStateUp: boolean): LoadBalancer {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
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
    public set operatingStatus(operatingStatus: string | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
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
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withVipSubnetCidrId(vipSubnetCidrId: string): LoadBalancer {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
        return this;
    }
    public set vipSubnetCidrId(vipSubnetCidrId: string | undefined) {
        this['vip_subnet_cidr_id'] = vipSubnetCidrId;
    }
    public get vipSubnetCidrId() {
        return this['vip_subnet_cidr_id'];
    }
    public withVipAddress(vipAddress: string): LoadBalancer {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress() {
        return this['vip_address'];
    }
    public withVipPortId(vipPortId: string): LoadBalancer {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: string | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId() {
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
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): LoadBalancer {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
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
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
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
    public set ipv6VipAddress(ipv6VipAddress: string | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress() {
        return this['ipv6_vip_address'];
    }
    public withIpv6VipVirsubnetId(ipv6VipVirsubnetId: string): LoadBalancer {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
        return this;
    }
    public set ipv6VipVirsubnetId(ipv6VipVirsubnetId: string | undefined) {
        this['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
    }
    public get ipv6VipVirsubnetId() {
        return this['ipv6_vip_virsubnet_id'];
    }
    public withIpv6VipPortId(ipv6VipPortId: string): LoadBalancer {
        this['ipv6_vip_port_id'] = ipv6VipPortId;
        return this;
    }
    public set ipv6VipPortId(ipv6VipPortId: string | undefined) {
        this['ipv6_vip_port_id'] = ipv6VipPortId;
    }
    public get ipv6VipPortId() {
        return this['ipv6_vip_port_id'];
    }
    public withAvailabilityZoneList(availabilityZoneList: Array<string>): LoadBalancer {
        this['availability_zone_list'] = availabilityZoneList;
        return this;
    }
    public set availabilityZoneList(availabilityZoneList: Array<string> | undefined) {
        this['availability_zone_list'] = availabilityZoneList;
    }
    public get availabilityZoneList() {
        return this['availability_zone_list'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): LoadBalancer {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBillingInfo(billingInfo: string): LoadBalancer {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo() {
        return this['billing_info'];
    }
    public withL4FlavorId(l4FlavorId: string): LoadBalancer {
        this['l4_flavor_id'] = l4FlavorId;
        return this;
    }
    public set l4FlavorId(l4FlavorId: string | undefined) {
        this['l4_flavor_id'] = l4FlavorId;
    }
    public get l4FlavorId() {
        return this['l4_flavor_id'];
    }
    public withL4ScaleFlavorId(l4ScaleFlavorId: string): LoadBalancer {
        this['l4_scale_flavor_id'] = l4ScaleFlavorId;
        return this;
    }
    public set l4ScaleFlavorId(l4ScaleFlavorId: string | undefined) {
        this['l4_scale_flavor_id'] = l4ScaleFlavorId;
    }
    public get l4ScaleFlavorId() {
        return this['l4_scale_flavor_id'];
    }
    public withL7FlavorId(l7FlavorId: string): LoadBalancer {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId() {
        return this['l7_flavor_id'];
    }
    public withL7ScaleFlavorId(l7ScaleFlavorId: string): LoadBalancer {
        this['l7_scale_flavor_id'] = l7ScaleFlavorId;
        return this;
    }
    public set l7ScaleFlavorId(l7ScaleFlavorId: string | undefined) {
        this['l7_scale_flavor_id'] = l7ScaleFlavorId;
    }
    public get l7ScaleFlavorId() {
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
    public set globalEips(globalEips: Array<GlobalEipInfo> | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips() {
        return this['global_eips'];
    }
    public withElbVirsubnetIds(elbVirsubnetIds: Array<string>): LoadBalancer {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
        return this;
    }
    public set elbVirsubnetIds(elbVirsubnetIds: Array<string> | undefined) {
        this['elb_virsubnet_ids'] = elbVirsubnetIds;
    }
    public get elbVirsubnetIds() {
        return this['elb_virsubnet_ids'];
    }
    public withElbVirsubnetType(elbVirsubnetType: LoadBalancerElbVirsubnetTypeEnum): LoadBalancer {
        this['elb_virsubnet_type'] = elbVirsubnetType;
        return this;
    }
    public set elbVirsubnetType(elbVirsubnetType: LoadBalancerElbVirsubnetTypeEnum | undefined) {
        this['elb_virsubnet_type'] = elbVirsubnetType;
    }
    public get elbVirsubnetType() {
        return this['elb_virsubnet_type'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): LoadBalancer {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable() {
        return this['ip_target_enable'];
    }
    public withFrozenScene(frozenScene: string): LoadBalancer {
        this['frozen_scene'] = frozenScene;
        return this;
    }
    public set frozenScene(frozenScene: string | undefined) {
        this['frozen_scene'] = frozenScene;
    }
    public get frozenScene() {
        return this['frozen_scene'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: BandwidthRef): LoadBalancer {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: BandwidthRef | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth() {
        return this['ipv6_bandwidth'];
    }
    public withDeletionProtectionEnable(deletionProtectionEnable: boolean): LoadBalancer {
        this['deletion_protection_enable'] = deletionProtectionEnable;
        return this;
    }
    public set deletionProtectionEnable(deletionProtectionEnable: boolean | undefined) {
        this['deletion_protection_enable'] = deletionProtectionEnable;
    }
    public get deletionProtectionEnable() {
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
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
    public withWafFailureAction(wafFailureAction: string): LoadBalancer {
        this['waf_failure_action'] = wafFailureAction;
        return this;
    }
    public set wafFailureAction(wafFailureAction: string | undefined) {
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
export enum LoadBalancerElbVirsubnetTypeEnum {
    IPV4 = 'ipv4',
    DUALSTACK = 'dualstack'
}
