import { VolumeTypeExtraSpecs } from './VolumeTypeExtraSpecs';


export class VolumeType {
    public id?: string;
    public name?: string;
    private 'extra_specs'?: VolumeTypeExtraSpecs;
    public description?: string;
    private 'qos_specs_id'?: string;
    private 'is_public'?: boolean;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): VolumeType {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VolumeType {
        this['name'] = name;
        return this;
    }
    public withExtraSpecs(extraSpecs: VolumeTypeExtraSpecs): VolumeType {
        this['extra_specs'] = extraSpecs;
        return this;
    }
    public set extraSpecs(extraSpecs: VolumeTypeExtraSpecs  | undefined) {
        this['extra_specs'] = extraSpecs;
    }
    public get extraSpecs(): VolumeTypeExtraSpecs | undefined {
        return this['extra_specs'];
    }
    public withDescription(description: string): VolumeType {
        this['description'] = description;
        return this;
    }
    public withQosSpecsId(qosSpecsId: string): VolumeType {
        this['qos_specs_id'] = qosSpecsId;
        return this;
    }
    public set qosSpecsId(qosSpecsId: string  | undefined) {
        this['qos_specs_id'] = qosSpecsId;
    }
    public get qosSpecsId(): string | undefined {
        return this['qos_specs_id'];
    }
    public withIsPublic(isPublic: boolean): VolumeType {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
}