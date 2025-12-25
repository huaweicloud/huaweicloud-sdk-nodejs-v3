import { VifExtendAttribute } from './VifExtendAttribute';


export class UpdateExtendAttributeRequestBody {
    private 'extend_attribute'?: VifExtendAttribute;
    public constructor(extendAttribute?: VifExtendAttribute) { 
        this['extend_attribute'] = extendAttribute;
    }
    public withExtendAttribute(extendAttribute: VifExtendAttribute): UpdateExtendAttributeRequestBody {
        this['extend_attribute'] = extendAttribute;
        return this;
    }
    public set extendAttribute(extendAttribute: VifExtendAttribute  | undefined) {
        this['extend_attribute'] = extendAttribute;
    }
    public get extendAttribute(): VifExtendAttribute | undefined {
        return this['extend_attribute'];
    }
}