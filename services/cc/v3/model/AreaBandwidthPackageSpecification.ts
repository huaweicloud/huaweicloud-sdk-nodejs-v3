import { LocalAreaId } from './LocalAreaId';
import { LocalAreaIdDef } from './LocalAreaIdDef';
import { RemoteAreaId } from './RemoteAreaId';
import { RemoteAreaIdDef } from './RemoteAreaIdDef';
import { SpecificationCodeInfo } from './SpecificationCodeInfo';


export class AreaBandwidthPackageSpecification {
    private 'local_area_id'?: LocalAreaIdDef;
    private 'remote_area_id'?: RemoteAreaIdDef;
    public id?: string;
    private 'spec_codes'?: Array<SpecificationCodeInfo>;
    public constructor(localAreaId?: LocalAreaIdDef, remoteAreaId?: RemoteAreaIdDef, id?: string, specCodes?: Array<SpecificationCodeInfo>) { 
        this['local_area_id'] = localAreaId;
        this['remote_area_id'] = remoteAreaId;
        this['id'] = id;
        this['spec_codes'] = specCodes;
    }
    public withLocalAreaId(localAreaId: LocalAreaIdDef): AreaBandwidthPackageSpecification {
        this['local_area_id'] = localAreaId;
        return this;
    }
    public set localAreaId(localAreaId: LocalAreaIdDef  | undefined) {
        this['local_area_id'] = localAreaId;
    }
    public get localAreaId(): LocalAreaIdDef | undefined {
        return this['local_area_id'];
    }
    public withRemoteAreaId(remoteAreaId: RemoteAreaIdDef): AreaBandwidthPackageSpecification {
        this['remote_area_id'] = remoteAreaId;
        return this;
    }
    public set remoteAreaId(remoteAreaId: RemoteAreaIdDef  | undefined) {
        this['remote_area_id'] = remoteAreaId;
    }
    public get remoteAreaId(): RemoteAreaIdDef | undefined {
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