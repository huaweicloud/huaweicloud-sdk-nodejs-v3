import { RsetResolutionInstances } from './RsetResolutionInstances';
import { VpcResolutionInstances } from './VpcResolutionInstances';
import { ZoneResolutionInstances } from './ZoneResolutionInstances';


export class ResolutionInstances {
    private 'dns_public_zone_id'?: ZoneResolutionInstances;
    private 'dns_public_recordset_id'?: RsetResolutionInstances;
    private 'dns_private_zone_id'?: ZoneResolutionInstances;
    private 'vpc_id'?: VpcResolutionInstances;
    public constructor() { 
    }
    public withDnsPublicZoneId(dnsPublicZoneId: ZoneResolutionInstances): ResolutionInstances {
        this['dns_public_zone_id'] = dnsPublicZoneId;
        return this;
    }
    public set dnsPublicZoneId(dnsPublicZoneId: ZoneResolutionInstances  | undefined) {
        this['dns_public_zone_id'] = dnsPublicZoneId;
    }
    public get dnsPublicZoneId(): ZoneResolutionInstances | undefined {
        return this['dns_public_zone_id'];
    }
    public withDnsPublicRecordsetId(dnsPublicRecordsetId: RsetResolutionInstances): ResolutionInstances {
        this['dns_public_recordset_id'] = dnsPublicRecordsetId;
        return this;
    }
    public set dnsPublicRecordsetId(dnsPublicRecordsetId: RsetResolutionInstances  | undefined) {
        this['dns_public_recordset_id'] = dnsPublicRecordsetId;
    }
    public get dnsPublicRecordsetId(): RsetResolutionInstances | undefined {
        return this['dns_public_recordset_id'];
    }
    public withDnsPrivateZoneId(dnsPrivateZoneId: ZoneResolutionInstances): ResolutionInstances {
        this['dns_private_zone_id'] = dnsPrivateZoneId;
        return this;
    }
    public set dnsPrivateZoneId(dnsPrivateZoneId: ZoneResolutionInstances  | undefined) {
        this['dns_private_zone_id'] = dnsPrivateZoneId;
    }
    public get dnsPrivateZoneId(): ZoneResolutionInstances | undefined {
        return this['dns_private_zone_id'];
    }
    public withVpcId(vpcId: VpcResolutionInstances): ResolutionInstances {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: VpcResolutionInstances  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): VpcResolutionInstances | undefined {
        return this['vpc_id'];
    }
}