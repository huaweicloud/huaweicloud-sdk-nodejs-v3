

export class Statement {
    private 'Sid'?: string;
    private 'Effect'?: string;
    private 'Principal'?: string;
    private 'NotPrincipal'?: string;
    private 'Action'?: string;
    private 'NotAction'?: string;
    private 'Resource'?: string;
    private 'NotResource'?: string;
    public constructor(sid?: string, effect?: string) { 
        this['Sid'] = sid;
        this['Effect'] = effect;
    }
    public withSid(sid: string): Statement {
        this['Sid'] = sid;
        return this;
    }
    public set sid(sid: string  | undefined) {
        this['Sid'] = sid;
    }
    public get sid(): string | undefined {
        return this['Sid'];
    }
    public withEffect(effect: string): Statement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: string  | undefined) {
        this['Effect'] = effect;
    }
    public get effect(): string | undefined {
        return this['Effect'];
    }
    public withPrincipal(principal: string): Statement {
        this['Principal'] = principal;
        return this;
    }
    public set principal(principal: string  | undefined) {
        this['Principal'] = principal;
    }
    public get principal(): string | undefined {
        return this['Principal'];
    }
    public withNotPrincipal(notPrincipal: string): Statement {
        this['NotPrincipal'] = notPrincipal;
        return this;
    }
    public set notPrincipal(notPrincipal: string  | undefined) {
        this['NotPrincipal'] = notPrincipal;
    }
    public get notPrincipal(): string | undefined {
        return this['NotPrincipal'];
    }
    public withAction(action: string): Statement {
        this['Action'] = action;
        return this;
    }
    public set action(action: string  | undefined) {
        this['Action'] = action;
    }
    public get action(): string | undefined {
        return this['Action'];
    }
    public withNotAction(notAction: string): Statement {
        this['NotAction'] = notAction;
        return this;
    }
    public set notAction(notAction: string  | undefined) {
        this['NotAction'] = notAction;
    }
    public get notAction(): string | undefined {
        return this['NotAction'];
    }
    public withResource(resource: string): Statement {
        this['Resource'] = resource;
        return this;
    }
    public set resource(resource: string  | undefined) {
        this['Resource'] = resource;
    }
    public get resource(): string | undefined {
        return this['Resource'];
    }
    public withNotResource(notResource: string): Statement {
        this['NotResource'] = notResource;
        return this;
    }
    public set notResource(notResource: string  | undefined) {
        this['NotResource'] = notResource;
    }
    public get notResource(): string | undefined {
        return this['NotResource'];
    }
}