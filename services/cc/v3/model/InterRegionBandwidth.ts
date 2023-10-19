import { BandwidthPackageId } from './BandwidthPackageId';
import { CloudConnectionId } from './CloudConnectionId';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { InterRegion } from './InterRegion';
import { Name } from './Name';
import { UUIDIdentifier } from './UUIDIdentifier';
import { UpdatedAt } from './UpdatedAt';


export class InterRegionBandwidth {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'cloud_connection_id'?: string;
    private 'bandwidth_package_id'?: string;
    private 'inter_regions'?: Array<InterRegion>;
    public bandwidth?: number;
    public constructor(id?: string, name?: string, domainId?: string, createdAt?: Date, updatedAt?: Date, cloudConnectionId?: string, bandwidthPackageId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['domain_id'] = domainId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['cloud_connection_id'] = cloudConnectionId;
        this['bandwidth_package_id'] = bandwidthPackageId;
    }
    public withId(id: string): InterRegionBandwidth {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InterRegionBandwidth {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InterRegionBandwidth {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): InterRegionBandwidth {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreatedAt(createdAt: Date): InterRegionBandwidth {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): InterRegionBandwidth {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withCloudConnectionId(cloudConnectionId: string): InterRegionBandwidth {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
    public withBandwidthPackageId(bandwidthPackageId: string): InterRegionBandwidth {
        this['bandwidth_package_id'] = bandwidthPackageId;
        return this;
    }
    public set bandwidthPackageId(bandwidthPackageId: string  | undefined) {
        this['bandwidth_package_id'] = bandwidthPackageId;
    }
    public get bandwidthPackageId(): string | undefined {
        return this['bandwidth_package_id'];
    }
    public withInterRegions(interRegions: Array<InterRegion>): InterRegionBandwidth {
        this['inter_regions'] = interRegions;
        return this;
    }
    public set interRegions(interRegions: Array<InterRegion>  | undefined) {
        this['inter_regions'] = interRegions;
    }
    public get interRegions(): Array<InterRegion> | undefined {
        return this['inter_regions'];
    }
    public withBandwidth(bandwidth: number): InterRegionBandwidth {
        this['bandwidth'] = bandwidth;
        return this;
    }
}