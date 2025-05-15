import { LocalRegionId } from './LocalRegionId';
import { RemoteRegionId } from './RemoteRegionId';
import { SpecificationCodeInfo } from './SpecificationCodeInfo';


export class RegionBandwidthPackageSpecification {
    private 'local_region_id'?: string;
    private 'remote_region_id'?: string;
    public id?: string;
    public name?: string;
    private 'en_name'?: string;
    private 'es_name'?: string;
    private 'pt_name'?: string;
    private 'spec_codes'?: Array<SpecificationCodeInfo>;
    public constructor(localRegionId?: string, remoteRegionId?: string) { 
        this['local_region_id'] = localRegionId;
        this['remote_region_id'] = remoteRegionId;
    }
    public withLocalRegionId(localRegionId: string): RegionBandwidthPackageSpecification {
        this['local_region_id'] = localRegionId;
        return this;
    }
    public set localRegionId(localRegionId: string  | undefined) {
        this['local_region_id'] = localRegionId;
    }
    public get localRegionId(): string | undefined {
        return this['local_region_id'];
    }
    public withRemoteRegionId(remoteRegionId: string): RegionBandwidthPackageSpecification {
        this['remote_region_id'] = remoteRegionId;
        return this;
    }
    public set remoteRegionId(remoteRegionId: string  | undefined) {
        this['remote_region_id'] = remoteRegionId;
    }
    public get remoteRegionId(): string | undefined {
        return this['remote_region_id'];
    }
    public withId(id: string): RegionBandwidthPackageSpecification {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RegionBandwidthPackageSpecification {
        this['name'] = name;
        return this;
    }
    public withEnName(enName: string): RegionBandwidthPackageSpecification {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withEsName(esName: string): RegionBandwidthPackageSpecification {
        this['es_name'] = esName;
        return this;
    }
    public set esName(esName: string  | undefined) {
        this['es_name'] = esName;
    }
    public get esName(): string | undefined {
        return this['es_name'];
    }
    public withPtName(ptName: string): RegionBandwidthPackageSpecification {
        this['pt_name'] = ptName;
        return this;
    }
    public set ptName(ptName: string  | undefined) {
        this['pt_name'] = ptName;
    }
    public get ptName(): string | undefined {
        return this['pt_name'];
    }
    public withSpecCodes(specCodes: Array<SpecificationCodeInfo>): RegionBandwidthPackageSpecification {
        this['spec_codes'] = specCodes;
        return this;
    }
    public set specCodes(specCodes: Array<SpecificationCodeInfo>  | undefined) {
        this['spec_codes'] = specCodes;
    }
    public get specCodes(): Array<SpecificationCodeInfo> | undefined {
        return this['spec_codes'];
    }
}