

export class CreatePreProcessRulesRequestBodyPreprocessRules {
    public name?: string;
    private 'mapper_id'?: string;
    private 'mapper_type_id'?: string;
    public action?: CreatePreProcessRulesRequestBodyPreprocessRulesActionEnum | string;
    public expression?: string;
    public constructor() { 
    }
    public withName(name: string): CreatePreProcessRulesRequestBodyPreprocessRules {
        this['name'] = name;
        return this;
    }
    public withMapperId(mapperId: string): CreatePreProcessRulesRequestBodyPreprocessRules {
        this['mapper_id'] = mapperId;
        return this;
    }
    public set mapperId(mapperId: string  | undefined) {
        this['mapper_id'] = mapperId;
    }
    public get mapperId(): string | undefined {
        return this['mapper_id'];
    }
    public withMapperTypeId(mapperTypeId: string): CreatePreProcessRulesRequestBodyPreprocessRules {
        this['mapper_type_id'] = mapperTypeId;
        return this;
    }
    public set mapperTypeId(mapperTypeId: string  | undefined) {
        this['mapper_type_id'] = mapperTypeId;
    }
    public get mapperTypeId(): string | undefined {
        return this['mapper_type_id'];
    }
    public withAction(action: CreatePreProcessRulesRequestBodyPreprocessRulesActionEnum | string): CreatePreProcessRulesRequestBodyPreprocessRules {
        this['action'] = action;
        return this;
    }
    public withExpression(expression: string): CreatePreProcessRulesRequestBodyPreprocessRules {
        this['expression'] = expression;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePreProcessRulesRequestBodyPreprocessRulesActionEnum {
    DROP = 'drop'
}
