

export class CreatePreProcessRulesResponseBodyDataPreprocessRules {
    public id?: string;
    public name?: string;
    private 'mapper_id'?: string;
    private 'mapper_type_id'?: string;
    public action?: CreatePreProcessRulesResponseBodyDataPreprocessRulesActionEnum | string;
    public expression?: string;
    public constructor() { 
    }
    public withId(id: string): CreatePreProcessRulesResponseBodyDataPreprocessRules {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreatePreProcessRulesResponseBodyDataPreprocessRules {
        this['name'] = name;
        return this;
    }
    public withMapperId(mapperId: string): CreatePreProcessRulesResponseBodyDataPreprocessRules {
        this['mapper_id'] = mapperId;
        return this;
    }
    public set mapperId(mapperId: string  | undefined) {
        this['mapper_id'] = mapperId;
    }
    public get mapperId(): string | undefined {
        return this['mapper_id'];
    }
    public withMapperTypeId(mapperTypeId: string): CreatePreProcessRulesResponseBodyDataPreprocessRules {
        this['mapper_type_id'] = mapperTypeId;
        return this;
    }
    public set mapperTypeId(mapperTypeId: string  | undefined) {
        this['mapper_type_id'] = mapperTypeId;
    }
    public get mapperTypeId(): string | undefined {
        return this['mapper_type_id'];
    }
    public withAction(action: CreatePreProcessRulesResponseBodyDataPreprocessRulesActionEnum | string): CreatePreProcessRulesResponseBodyDataPreprocessRules {
        this['action'] = action;
        return this;
    }
    public withExpression(expression: string): CreatePreProcessRulesResponseBodyDataPreprocessRules {
        this['expression'] = expression;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePreProcessRulesResponseBodyDataPreprocessRulesActionEnum {
    DROP = 'drop'
}
