

export class PolicyStatement {
    private 'Effect': string | undefined;
    private 'Action': string | undefined;
    private 'Resource': Array<string> | undefined;
    public constructor(effect?: any, action?: any, resource?: any) { 
        this['Effect'] = effect;
        this['Action'] = action;
        this['Resource'] = resource;
    }
    public withEffect(effect: string): PolicyStatement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: string | undefined) {
        this['Effect'] = effect;
    }
    public get effect() {
        return this['Effect'];
    }
    public withAction(action: string): PolicyStatement {
        this['Action'] = action;
        return this;
    }
    public set action(action: string | undefined) {
        this['Action'] = action;
    }
    public get action() {
        return this['Action'];
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