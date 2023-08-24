import { StyleExtraMetaAdditionalProperties1 } from './StyleExtraMetaAdditionalProperties1';


export class StyleExtraMetaModellingAlgorithm {
    public additionalProperties?: StyleExtraMetaAdditionalProperties1;
    public constructor() { 
    }
    public withAdditionalProperties(additionalProperties: StyleExtraMetaAdditionalProperties1): StyleExtraMetaModellingAlgorithm {
        this['additionalProperties'] = additionalProperties;
        return this;
    }
}