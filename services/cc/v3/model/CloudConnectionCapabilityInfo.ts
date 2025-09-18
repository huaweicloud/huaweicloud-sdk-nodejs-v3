import { CloudConnectionCapabilityKeyEnum } from './CloudConnectionCapabilityKeyEnum';
import { CloudConnectionDomainBandwidthCapabilityValue } from './CloudConnectionDomainBandwidthCapabilityValue';
import { CloudConnectionDomainBandwidthValue } from './CloudConnectionDomainBandwidthValue';
import { CloudConnectionEnterpriseSupportSitesCapabilityValue } from './CloudConnectionEnterpriseSupportSitesCapabilityValue';
import { CloudConnectionIpv6SupportRegionsCapabilityValue } from './CloudConnectionIpv6SupportRegionsCapabilityValue';
import { CloudConnectionIsSupportCapabilityValue } from './CloudConnectionIsSupportCapabilityValue';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { UUID32Identifier } from './UUID32Identifier';
import { UpdatedAt } from './UpdatedAt';


export class CloudConnectionCapabilityInfo {
    public id?: string;
    private 'domain_id'?: string;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'is_support'?: boolean;
    public bandwidth?: CloudConnectionDomainBandwidthValue;
    private 'support_regions'?: Array<string>;
    private 'support_sites'?: Array<string>;
    private 'resource_type'?: CloudConnectionCapabilityKeyEnum;
    public constructor(id?: string, domainId?: string, createdAt?: Date, updatedAt?: Date, isSupport?: boolean, bandwidth?: CloudConnectionDomainBandwidthValue, supportRegions?: Array<string>, supportSites?: Array<string>) { 
        this['id'] = id;
        this['domain_id'] = domainId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['is_support'] = isSupport;
        this['bandwidth'] = bandwidth;
        this['support_regions'] = supportRegions;
        this['support_sites'] = supportSites;
    }
    public withId(id: string): CloudConnectionCapabilityInfo {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): CloudConnectionCapabilityInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDescription(description: string): CloudConnectionCapabilityInfo {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): CloudConnectionCapabilityInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CloudConnectionCapabilityInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withIsSupport(isSupport: boolean): CloudConnectionCapabilityInfo {
        this['is_support'] = isSupport;
        return this;
    }
    public set isSupport(isSupport: boolean  | undefined) {
        this['is_support'] = isSupport;
    }
    public get isSupport(): boolean | undefined {
        return this['is_support'];
    }
    public withBandwidth(bandwidth: CloudConnectionDomainBandwidthValue): CloudConnectionCapabilityInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withSupportRegions(supportRegions: Array<string>): CloudConnectionCapabilityInfo {
        this['support_regions'] = supportRegions;
        return this;
    }
    public set supportRegions(supportRegions: Array<string>  | undefined) {
        this['support_regions'] = supportRegions;
    }
    public get supportRegions(): Array<string> | undefined {
        return this['support_regions'];
    }
    public withSupportSites(supportSites: Array<string>): CloudConnectionCapabilityInfo {
        this['support_sites'] = supportSites;
        return this;
    }
    public set supportSites(supportSites: Array<string>  | undefined) {
        this['support_sites'] = supportSites;
    }
    public get supportSites(): Array<string> | undefined {
        return this['support_sites'];
    }
    public withResourceType(resourceType: CloudConnectionCapabilityKeyEnum): CloudConnectionCapabilityInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CloudConnectionCapabilityKeyEnum  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CloudConnectionCapabilityKeyEnum | undefined {
        return this['resource_type'];
    }
}