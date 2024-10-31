import { FirewallInstanceResource } from './FirewallInstanceResource';
import { Flavor } from './Flavor';
import { ProtectObjectVO } from './ProtectObjectVO';


export class GetFirewallInstanceResponseRecord {
    private 'fw_instance_id'?: string;
    public name?: string;
    private 'ha_type'?: number;
    private 'charge_mode'?: number;
    private 'service_type'?: number;
    private 'engine_type'?: number;
    public flavor?: Flavor;
    private 'protect_objects'?: Array<ProtectObjectVO>;
    public status?: number;
    private 'is_old_firewall_instance'?: boolean;
    private 'is_available_obs'?: boolean;
    private 'is_support_threat_tags'?: boolean;
    private 'support_ipv6'?: boolean;
    private 'feature_toggle'?: { [key: string]: boolean; };
    public resources?: Array<FirewallInstanceResource>;
    private 'fw_instance_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'resource_id'?: string;
    private 'support_url_filtering'?: boolean;
    public tags?: string;
    public constructor() { 
    }
    public withFwInstanceId(fwInstanceId: string): GetFirewallInstanceResponseRecord {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withName(name: string): GetFirewallInstanceResponseRecord {
        this['name'] = name;
        return this;
    }
    public withHaType(haType: number): GetFirewallInstanceResponseRecord {
        this['ha_type'] = haType;
        return this;
    }
    public set haType(haType: number  | undefined) {
        this['ha_type'] = haType;
    }
    public get haType(): number | undefined {
        return this['ha_type'];
    }
    public withChargeMode(chargeMode: number): GetFirewallInstanceResponseRecord {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: number  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): number | undefined {
        return this['charge_mode'];
    }
    public withServiceType(serviceType: number): GetFirewallInstanceResponseRecord {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withEngineType(engineType: number): GetFirewallInstanceResponseRecord {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: number  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): number | undefined {
        return this['engine_type'];
    }
    public withFlavor(flavor: Flavor): GetFirewallInstanceResponseRecord {
        this['flavor'] = flavor;
        return this;
    }
    public withProtectObjects(protectObjects: Array<ProtectObjectVO>): GetFirewallInstanceResponseRecord {
        this['protect_objects'] = protectObjects;
        return this;
    }
    public set protectObjects(protectObjects: Array<ProtectObjectVO>  | undefined) {
        this['protect_objects'] = protectObjects;
    }
    public get protectObjects(): Array<ProtectObjectVO> | undefined {
        return this['protect_objects'];
    }
    public withStatus(status: number): GetFirewallInstanceResponseRecord {
        this['status'] = status;
        return this;
    }
    public withIsOldFirewallInstance(isOldFirewallInstance: boolean): GetFirewallInstanceResponseRecord {
        this['is_old_firewall_instance'] = isOldFirewallInstance;
        return this;
    }
    public set isOldFirewallInstance(isOldFirewallInstance: boolean  | undefined) {
        this['is_old_firewall_instance'] = isOldFirewallInstance;
    }
    public get isOldFirewallInstance(): boolean | undefined {
        return this['is_old_firewall_instance'];
    }
    public withIsAvailableObs(isAvailableObs: boolean): GetFirewallInstanceResponseRecord {
        this['is_available_obs'] = isAvailableObs;
        return this;
    }
    public set isAvailableObs(isAvailableObs: boolean  | undefined) {
        this['is_available_obs'] = isAvailableObs;
    }
    public get isAvailableObs(): boolean | undefined {
        return this['is_available_obs'];
    }
    public withIsSupportThreatTags(isSupportThreatTags: boolean): GetFirewallInstanceResponseRecord {
        this['is_support_threat_tags'] = isSupportThreatTags;
        return this;
    }
    public set isSupportThreatTags(isSupportThreatTags: boolean  | undefined) {
        this['is_support_threat_tags'] = isSupportThreatTags;
    }
    public get isSupportThreatTags(): boolean | undefined {
        return this['is_support_threat_tags'];
    }
    public withSupportIpv6(supportIpv6: boolean): GetFirewallInstanceResponseRecord {
        this['support_ipv6'] = supportIpv6;
        return this;
    }
    public set supportIpv6(supportIpv6: boolean  | undefined) {
        this['support_ipv6'] = supportIpv6;
    }
    public get supportIpv6(): boolean | undefined {
        return this['support_ipv6'];
    }
    public withFeatureToggle(featureToggle: { [key: string]: boolean; }): GetFirewallInstanceResponseRecord {
        this['feature_toggle'] = featureToggle;
        return this;
    }
    public set featureToggle(featureToggle: { [key: string]: boolean; }  | undefined) {
        this['feature_toggle'] = featureToggle;
    }
    public get featureToggle(): { [key: string]: boolean; } | undefined {
        return this['feature_toggle'];
    }
    public withResources(resources: Array<FirewallInstanceResource>): GetFirewallInstanceResponseRecord {
        this['resources'] = resources;
        return this;
    }
    public withFwInstanceName(fwInstanceName: string): GetFirewallInstanceResponseRecord {
        this['fw_instance_name'] = fwInstanceName;
        return this;
    }
    public set fwInstanceName(fwInstanceName: string  | undefined) {
        this['fw_instance_name'] = fwInstanceName;
    }
    public get fwInstanceName(): string | undefined {
        return this['fw_instance_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GetFirewallInstanceResponseRecord {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withResourceId(resourceId: string): GetFirewallInstanceResponseRecord {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withSupportUrlFiltering(supportUrlFiltering: boolean): GetFirewallInstanceResponseRecord {
        this['support_url_filtering'] = supportUrlFiltering;
        return this;
    }
    public set supportUrlFiltering(supportUrlFiltering: boolean  | undefined) {
        this['support_url_filtering'] = supportUrlFiltering;
    }
    public get supportUrlFiltering(): boolean | undefined {
        return this['support_url_filtering'];
    }
    public withTags(tags: string): GetFirewallInstanceResponseRecord {
        this['tags'] = tags;
        return this;
    }
}