import { BandwidthCapability } from './BandwidthCapability';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { UUID32Identifier } from './UUID32Identifier';
import { UpdatedAt } from './UpdatedAt';


export class CloudConnectionCapability {
    public id?: string;
    private 'domain_id'?: string;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'resource_type'?: CloudConnectionCapabilityResourceTypeEnum | string;
    public bandwidth?: BandwidthCapability;
    private 'support_regions'?: Array<string>;
    public constructor(id?: string, domainId?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['domain_id'] = domainId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): CloudConnectionCapability {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): CloudConnectionCapability {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDescription(description: string): CloudConnectionCapability {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): CloudConnectionCapability {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CloudConnectionCapability {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withResourceType(resourceType: CloudConnectionCapabilityResourceTypeEnum | string): CloudConnectionCapability {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CloudConnectionCapabilityResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CloudConnectionCapabilityResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBandwidth(bandwidth: BandwidthCapability): CloudConnectionCapability {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withSupportRegions(supportRegions: Array<string>): CloudConnectionCapability {
        this['support_regions'] = supportRegions;
        return this;
    }
    public set supportRegions(supportRegions: Array<string>  | undefined) {
        this['support_regions'] = supportRegions;
    }
    public get supportRegions(): Array<string> | undefined {
        return this['support_regions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CloudConnectionCapabilityResourceTypeEnum {
    V2 = 'v2',
    V3 = 'v3',
    BILLING_MODE_PERIOD_REDUCE = 'billing_mode_period_reduce',
    BILLING_MODE_DEMAND = 'billing_mode_demand',
    BWP95 = 'bwp95',
    BWP95AVG = 'bwp95Avg',
    NETWORK_QUALITY = 'network-quality',
    ER = 'er',
    DOMAIN_BANDWIDTH = 'domain_bandwidth',
    IPV6 = 'ipv6',
    IPV6_SUPPORT_REGIONS = 'ipv6_support_regions'
}
