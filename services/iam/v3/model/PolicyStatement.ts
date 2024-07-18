

export class PolicyStatement {
    private 'Action'?: Array<string>;
    private 'Effect'?: PolicyStatementEffectEnum | string;
    private 'Condition'?: object;
    private 'Resource'?: object;
    public constructor(action?: Array<string>, effect?: string) { 
        this['Action'] = action;
        this['Effect'] = effect;
    }
    public withAction(action: Array<string>): PolicyStatement {
        this['Action'] = action;
        return this;
    }
    public set action(action: Array<string>  | undefined) {
        this['Action'] = action;
    }
    public get action(): Array<string> | undefined {
        return this['Action'];
    }
    public withEffect(effect: PolicyStatementEffectEnum | string): PolicyStatement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: PolicyStatementEffectEnum | string  | undefined) {
        this['Effect'] = effect;
    }
    public get effect(): PolicyStatementEffectEnum | string | undefined {
        return this['Effect'];
    }
    public withCondition(condition: object): PolicyStatement {
        this['Condition'] = condition;
        return this;
    }
    public set condition(condition: object  | undefined) {
        this['Condition'] = condition;
    }
    public get condition(): object | undefined {
        return this['Condition'];
    }
    public withResource(resource: object): PolicyStatement {
        this['Resource'] = resource;
        return this;
    }
    public set resource(resource: object  | undefined) {
        this['Resource'] = resource;
    }
    public get resource(): object | undefined {
        return this['Resource'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyStatementEffectEnum {
    ALLOW = 'Allow',
    DENY = 'Deny'
}
