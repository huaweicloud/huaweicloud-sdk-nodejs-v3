

export class ServiceStatement {
    private 'Action': Array<string> | undefined;
    private 'Effect': ServiceStatementEffectEnum | undefined;
    private 'Condition'?: { [key: string]: { [key: string]: Array<any>; }; } | undefined;
    private 'Resource'?: Array<string> | undefined;
    public constructor(action?: any, effect?: any) { 
        this['Action'] = action;
        this['Effect'] = effect;
    }
    public withAction(action: Array<string>): ServiceStatement {
        this['Action'] = action;
        return this;
    }
    public set action(action: Array<string> | undefined) {
        this['Action'] = action;
    }
    public get action() {
        return this['Action'];
    }
    public withEffect(effect: ServiceStatementEffectEnum): ServiceStatement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: ServiceStatementEffectEnum | undefined) {
        this['Effect'] = effect;
    }
    public get effect() {
        return this['Effect'];
    }
    public withCondition(condition: { [key: string]: { [key: string]: Array<any>; }; }): ServiceStatement {
        this['Condition'] = condition;
        return this;
    }
    public set condition(condition: { [key: string]: { [key: string]: Array<any>; }; } | undefined) {
        this['Condition'] = condition;
    }
    public get condition() {
        return this['Condition'];
    }
    public withResource(resource: Array<string>): ServiceStatement {
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
export enum ServiceStatementEffectEnum {
    ALLOW = 'Allow',
    DENY = 'Deny'
}
