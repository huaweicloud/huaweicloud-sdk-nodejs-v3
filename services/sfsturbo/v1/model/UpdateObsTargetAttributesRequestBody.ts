import { ObsTargetAttributes } from './ObsTargetAttributes';


export class UpdateObsTargetAttributesRequestBody {
    public attributes?: ObsTargetAttributes;
    public constructor(attributes?: ObsTargetAttributes) { 
        this['attributes'] = attributes;
    }
    public withAttributes(attributes: ObsTargetAttributes): UpdateObsTargetAttributesRequestBody {
        this['attributes'] = attributes;
        return this;
    }
}