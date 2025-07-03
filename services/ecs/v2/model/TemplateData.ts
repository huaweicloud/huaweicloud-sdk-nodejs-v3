import { TemplateBlockDeviceMappingOption } from './TemplateBlockDeviceMappingOption';
import { TemplateInternetAccessOption } from './TemplateInternetAccessOption';
import { TemplateMarketOptions } from './TemplateMarketOptions';
import { TemplateNetworkInterfaceOption } from './TemplateNetworkInterfaceOption';
import { TemplateOsProfile } from './TemplateOsProfile';
import { TemplateTagOptions } from './TemplateTagOptions';


export class TemplateData {
    private 'flavor_id'?: string;
    public name?: string;
    public description?: string;
    private 'availability_zone_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'auto_recovery'?: boolean;
    private 'os_profile'?: TemplateOsProfile;
    private 'security_group_ids'?: Array<string>;
    private 'network_interfaces'?: Array<TemplateNetworkInterfaceOption>;
    private 'block_device_mappings'?: Array<TemplateBlockDeviceMappingOption>;
    private 'market_options'?: TemplateMarketOptions;
    private 'internet_access'?: TemplateInternetAccessOption;
    public metadata?: { [key: string]: string; };
    private 'tag_options'?: Array<TemplateTagOptions>;
    public constructor() { 
    }
    public withFlavorId(flavorId: string): TemplateData {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withName(name: string): TemplateData {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TemplateData {
        this['description'] = description;
        return this;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): TemplateData {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): TemplateData {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAutoRecovery(autoRecovery: boolean): TemplateData {
        this['auto_recovery'] = autoRecovery;
        return this;
    }
    public set autoRecovery(autoRecovery: boolean  | undefined) {
        this['auto_recovery'] = autoRecovery;
    }
    public get autoRecovery(): boolean | undefined {
        return this['auto_recovery'];
    }
    public withOsProfile(osProfile: TemplateOsProfile): TemplateData {
        this['os_profile'] = osProfile;
        return this;
    }
    public set osProfile(osProfile: TemplateOsProfile  | undefined) {
        this['os_profile'] = osProfile;
    }
    public get osProfile(): TemplateOsProfile | undefined {
        return this['os_profile'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): TemplateData {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
    public withNetworkInterfaces(networkInterfaces: Array<TemplateNetworkInterfaceOption>): TemplateData {
        this['network_interfaces'] = networkInterfaces;
        return this;
    }
    public set networkInterfaces(networkInterfaces: Array<TemplateNetworkInterfaceOption>  | undefined) {
        this['network_interfaces'] = networkInterfaces;
    }
    public get networkInterfaces(): Array<TemplateNetworkInterfaceOption> | undefined {
        return this['network_interfaces'];
    }
    public withBlockDeviceMappings(blockDeviceMappings: Array<TemplateBlockDeviceMappingOption>): TemplateData {
        this['block_device_mappings'] = blockDeviceMappings;
        return this;
    }
    public set blockDeviceMappings(blockDeviceMappings: Array<TemplateBlockDeviceMappingOption>  | undefined) {
        this['block_device_mappings'] = blockDeviceMappings;
    }
    public get blockDeviceMappings(): Array<TemplateBlockDeviceMappingOption> | undefined {
        return this['block_device_mappings'];
    }
    public withMarketOptions(marketOptions: TemplateMarketOptions): TemplateData {
        this['market_options'] = marketOptions;
        return this;
    }
    public set marketOptions(marketOptions: TemplateMarketOptions  | undefined) {
        this['market_options'] = marketOptions;
    }
    public get marketOptions(): TemplateMarketOptions | undefined {
        return this['market_options'];
    }
    public withInternetAccess(internetAccess: TemplateInternetAccessOption): TemplateData {
        this['internet_access'] = internetAccess;
        return this;
    }
    public set internetAccess(internetAccess: TemplateInternetAccessOption  | undefined) {
        this['internet_access'] = internetAccess;
    }
    public get internetAccess(): TemplateInternetAccessOption | undefined {
        return this['internet_access'];
    }
    public withMetadata(metadata: { [key: string]: string; }): TemplateData {
        this['metadata'] = metadata;
        return this;
    }
    public withTagOptions(tagOptions: Array<TemplateTagOptions>): TemplateData {
        this['tag_options'] = tagOptions;
        return this;
    }
    public set tagOptions(tagOptions: Array<TemplateTagOptions>  | undefined) {
        this['tag_options'] = tagOptions;
    }
    public get tagOptions(): Array<TemplateTagOptions> | undefined {
        return this['tag_options'];
    }
}