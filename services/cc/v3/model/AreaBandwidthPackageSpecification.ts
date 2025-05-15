import { AreaIdDef } from './AreaIdDef';
import { LocalAreaId } from './LocalAreaId';
import { RemoteAreaId } from './RemoteAreaId';
import { SpecificationCodeInfo } from './SpecificationCodeInfo';


export class AreaBandwidthPackageSpecification {
    private 'local_area_id'?: AreaIdDef;
    private 'remote_area_id'?: AreaIdDef;
    public id?: string;
    private 'spec_codes'?: Array<SpecificationCodeInfo>;
    public constructor(localAreaId?: AreaIdDef, remoteAreaId?: AreaIdDef, id?: string, specCodes?: Array<SpecificationCodeInfo>) { 
        this['local_area_id'] = localAreaId;
        this['remote_area_id'] = remoteAreaId;
        this['id'] = id;
        this['spec_codes'] = specCodes;
    }
    public withLocalAreaId(localAreaId: AreaIdDef): AreaBandwidthPackageSpecification {
        this['local_area_id'] = localAreaId;
        return this;
    }
    public set localAreaId(localAreaId: AreaIdDef  | undefined) {
        this['local_area_id'] = localAreaId;
    }
    public get localAreaId(): AreaIdDef | undefined {
        return this['local_area_id'];
    }
    public withRemoteAreaId(remoteAreaId: AreaIdDef): AreaBandwidthPackageSpecification {
        this['remote_area_id'] = remoteAreaId;
        return this;
    }
    public set remoteAreaId(remoteAreaId: AreaIdDef  | undefined) {
        this['remote_area_id'] = remoteAreaId;
    }
    public get remoteAreaId(): AreaIdDef | undefined {
        return this['remote_area_id'];
    }
    public withId(id: string): AreaBandwidthPackageSpecification {
        this['id'] = id;
        return this;
    }
    public withSpecCodes(specCodes: Array<SpecificationCodeInfo>): AreaBandwidthPackageSpecification {
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