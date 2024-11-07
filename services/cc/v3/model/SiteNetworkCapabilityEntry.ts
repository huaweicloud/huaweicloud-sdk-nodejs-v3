import { ConnectionBandwidthChargeModeEnum } from './ConnectionBandwidthChargeModeEnum';
import { ConnectionBandwidthSizeRange } from './ConnectionBandwidthSizeRange';
import { DomainId } from './DomainId';
import { SiteNetworkSpecificationEnum } from './SiteNetworkSpecificationEnum';
import { SiteNetworkTopologyEnum } from './SiteNetworkTopologyEnum';
import { UUID64Identifier } from './UUID64Identifier';


export class SiteNetworkCapabilityEntry {
    public id?: string;
    private 'domain_id'?: string;
    public specification?: SiteNetworkSpecificationEnum;
    private 'is_support'?: boolean;
    private 'is_support_enterprise_project'?: boolean;
    private 'is_support_tag'?: boolean;
    private 'is_support_intra_region'?: boolean;
    private 'support_topologies'?: Array<SiteNetworkTopologyEnum>;
    private 'support_regions'?: Array<string>;
    private 'support_dscp_regions'?: Array<string>;
    private 'support_freeze_regions'?: Array<string>;
    private 'support_locations'?: Array<string>;
    private 'size_range'?: ConnectionBandwidthSizeRange;
    private 'charge_mode'?: Array<ConnectionBandwidthChargeModeEnum>;
    public constructor(id?: string, domainId?: string, specification?: SiteNetworkSpecificationEnum) { 
        this['id'] = id;
        this['domain_id'] = domainId;
        this['specification'] = specification;
    }
    public withId(id: string): SiteNetworkCapabilityEntry {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): SiteNetworkCapabilityEntry {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withSpecification(specification: SiteNetworkSpecificationEnum): SiteNetworkCapabilityEntry {
        this['specification'] = specification;
        return this;
    }
    public withIsSupport(isSupport: boolean): SiteNetworkCapabilityEntry {
        this['is_support'] = isSupport;
        return this;
    }
    public set isSupport(isSupport: boolean  | undefined) {
        this['is_support'] = isSupport;
    }
    public get isSupport(): boolean | undefined {
        return this['is_support'];
    }
    public withIsSupportEnterpriseProject(isSupportEnterpriseProject: boolean): SiteNetworkCapabilityEntry {
        this['is_support_enterprise_project'] = isSupportEnterpriseProject;
        return this;
    }
    public set isSupportEnterpriseProject(isSupportEnterpriseProject: boolean  | undefined) {
        this['is_support_enterprise_project'] = isSupportEnterpriseProject;
    }
    public get isSupportEnterpriseProject(): boolean | undefined {
        return this['is_support_enterprise_project'];
    }
    public withIsSupportTag(isSupportTag: boolean): SiteNetworkCapabilityEntry {
        this['is_support_tag'] = isSupportTag;
        return this;
    }
    public set isSupportTag(isSupportTag: boolean  | undefined) {
        this['is_support_tag'] = isSupportTag;
    }
    public get isSupportTag(): boolean | undefined {
        return this['is_support_tag'];
    }
    public withIsSupportIntraRegion(isSupportIntraRegion: boolean): SiteNetworkCapabilityEntry {
        this['is_support_intra_region'] = isSupportIntraRegion;
        return this;
    }
    public set isSupportIntraRegion(isSupportIntraRegion: boolean  | undefined) {
        this['is_support_intra_region'] = isSupportIntraRegion;
    }
    public get isSupportIntraRegion(): boolean | undefined {
        return this['is_support_intra_region'];
    }
    public withSupportTopologies(supportTopologies: Array<SiteNetworkTopologyEnum>): SiteNetworkCapabilityEntry {
        this['support_topologies'] = supportTopologies;
        return this;
    }
    public set supportTopologies(supportTopologies: Array<SiteNetworkTopologyEnum>  | undefined) {
        this['support_topologies'] = supportTopologies;
    }
    public get supportTopologies(): Array<SiteNetworkTopologyEnum> | undefined {
        return this['support_topologies'];
    }
    public withSupportRegions(supportRegions: Array<string>): SiteNetworkCapabilityEntry {
        this['support_regions'] = supportRegions;
        return this;
    }
    public set supportRegions(supportRegions: Array<string>  | undefined) {
        this['support_regions'] = supportRegions;
    }
    public get supportRegions(): Array<string> | undefined {
        return this['support_regions'];
    }
    public withSupportDscpRegions(supportDscpRegions: Array<string>): SiteNetworkCapabilityEntry {
        this['support_dscp_regions'] = supportDscpRegions;
        return this;
    }
    public set supportDscpRegions(supportDscpRegions: Array<string>  | undefined) {
        this['support_dscp_regions'] = supportDscpRegions;
    }
    public get supportDscpRegions(): Array<string> | undefined {
        return this['support_dscp_regions'];
    }
    public withSupportFreezeRegions(supportFreezeRegions: Array<string>): SiteNetworkCapabilityEntry {
        this['support_freeze_regions'] = supportFreezeRegions;
        return this;
    }
    public set supportFreezeRegions(supportFreezeRegions: Array<string>  | undefined) {
        this['support_freeze_regions'] = supportFreezeRegions;
    }
    public get supportFreezeRegions(): Array<string> | undefined {
        return this['support_freeze_regions'];
    }
    public withSupportLocations(supportLocations: Array<string>): SiteNetworkCapabilityEntry {
        this['support_locations'] = supportLocations;
        return this;
    }
    public set supportLocations(supportLocations: Array<string>  | undefined) {
        this['support_locations'] = supportLocations;
    }
    public get supportLocations(): Array<string> | undefined {
        return this['support_locations'];
    }
    public withSizeRange(sizeRange: ConnectionBandwidthSizeRange): SiteNetworkCapabilityEntry {
        this['size_range'] = sizeRange;
        return this;
    }
    public set sizeRange(sizeRange: ConnectionBandwidthSizeRange  | undefined) {
        this['size_range'] = sizeRange;
    }
    public get sizeRange(): ConnectionBandwidthSizeRange | undefined {
        return this['size_range'];
    }
    public withChargeMode(chargeMode: Array<ConnectionBandwidthChargeModeEnum>): SiteNetworkCapabilityEntry {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: Array<ConnectionBandwidthChargeModeEnum>  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): Array<ConnectionBandwidthChargeModeEnum> | undefined {
        return this['charge_mode'];
    }
}