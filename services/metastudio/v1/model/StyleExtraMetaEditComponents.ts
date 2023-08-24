import { StyleExtraMetaAdditionalProperties } from './StyleExtraMetaAdditionalProperties';


export class StyleExtraMetaEditComponents {
    public additionalProperties?: StyleExtraMetaAdditionalProperties;
    public constructor() { 
    }
    public withAdditionalProperties(additionalProperties: StyleExtraMetaAdditionalProperties): StyleExtraMetaEditComponents {
        this['additionalProperties'] = additionalProperties;
        return this;
    }
}