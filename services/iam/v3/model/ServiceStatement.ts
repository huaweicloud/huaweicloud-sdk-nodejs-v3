

export class ServiceStatement {
    private 'Action'?: Array<string>;
    private 'Effect'?: ServiceStatementEffectEnum | string;
    private 'Condition'?: { [key: string]: { [key: string]: Array<string>; }; };
    private 'Resource'?: object;
    public constructor(action?: Array<string>, effect?: string) { 
        this['Action'] = action;
        this['Effect'] = effect;
    }
    public withAction(action: Array<string>): ServiceStatement {
        this['Action'] = action;
        return this;
    }
    public set action(action: Array<string>  | undefined) {
        this['Action'] = action;
    }
    public get action(): Array<string> | undefined {
        return this['Action'];
    }
    public withEffect(effect: ServiceStatementEffectEnum | string): ServiceStatement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: ServiceStatementEffectEnum | string  | undefined) {
        this['Effect'] = effect;
    }
    public get effect(): ServiceStatementEffectEnum | string | undefined {
        return this['Effect'];
    }
    public withCondition(condition: { [key: string]: { [key: string]: Array<string>; }; }): ServiceStatement {
        this['Condition'] = condition;
        return this;
    }
    public set condition(condition: { [key: string]: { [key: string]: Array<string>; }; }  | undefined) {
        this['Condition'] = condition;
    }
    public get condition(): { [key: string]: { [key: string]: Array<string>; }; } | undefined {
        return this['Condition'];
    }
    public withResource(resource: object): ServiceStatement {
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
export enum ServiceStatementEffectEnum {
    ALLOW = 'Allow',
    DENY = 'Deny'
}
