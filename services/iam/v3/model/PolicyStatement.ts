

export class PolicyStatement {
    private 'Action': Array<string> | undefined;
    private 'Effect': PolicyStatementEffectEnum | undefined;
    private 'Condition'?: object | undefined;
    private 'Resource'?: Array<string> | undefined;
    public constructor(action: any, effect: any) { 
        this['Action'] = action;
        this['Effect'] = effect;
    }
    public withAction(action: Array<string>): PolicyStatement {
        this['Action'] = action;
        return this;
    }
    public set action(action: Array<string> | undefined) {
        this['Action'] = action;
    }
    public get action() {
        return this['Action'];
    }
    public withEffect(effect: PolicyStatementEffectEnum): PolicyStatement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: PolicyStatementEffectEnum | undefined) {
        this['Effect'] = effect;
    }
    public get effect() {
        return this['Effect'];
    }
    public withCondition(condition: object): PolicyStatement {
        this['Condition'] = condition;
        return this;
    }
    public set condition(condition: object | undefined) {
        this['Condition'] = condition;
    }
    public get condition() {
        return this['Condition'];
    }
    public withResource(resource: Array<string>): PolicyStatement {
        this['Resource'] = resource;
        return this;
    }
    public set resource(resource: Array<string> | undefined) {
        this['Resource'] = resource;
    }
    public get resource() {
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
