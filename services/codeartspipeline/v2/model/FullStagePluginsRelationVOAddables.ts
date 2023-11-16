

export class FullStagePluginsRelationVOAddables {
    public additionalProp1?: boolean;
    public additionalProp2?: boolean;
    public additionalProp3?: boolean;
    public constructor() { 
    }
    public withAdditionalProp1(additionalProp1: boolean): FullStagePluginsRelationVOAddables {
        this['additionalProp1'] = additionalProp1;
        return this;
    }
    public withAdditionalProp2(additionalProp2: boolean): FullStagePluginsRelationVOAddables {
        this['additionalProp2'] = additionalProp2;
        return this;
    }
    public withAdditionalProp3(additionalProp3: boolean): FullStagePluginsRelationVOAddables {
        this['additionalProp3'] = additionalProp3;
        return this;
    }
}