

export class PolicyStatement {
    private 'Effect'?: string;
    private 'Action'?: Array<string>;
    private 'Resource'?: Array<string>;
    public constructor(effect?: string, action?: Array<string>, resource?: Array<string>) { 
        this['Effect'] = effect;
        this['Action'] = action;
        this['Resource'] = resource;
    }
    public withEffect(effect: string): PolicyStatement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: string  | undefined) {
        this['Effect'] = effect;
    }
    public get effect(): string | undefined {
        return this['Effect'];
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
    public withResource(resource: Array<string>): PolicyStatement {
        this['Resource'] = resource;
        return this;
    }
    public set resource(resource: Array<string>  | undefined) {
        this['Resource'] = resource;
    }
    public get resource(): Array<string> | undefined {
        return this['Resource'];
    }
}