import { PolicyEffectEnum } from './PolicyEffectEnum';


export class AuthorizeObsPolicyStatement {
    public effect?: PolicyEffectEnum;
    public action?: Array<string>;
    public resource?: Array<string>;
    public constructor() { 
    }
    public withEffect(effect: PolicyEffectEnum): AuthorizeObsPolicyStatement {
        this['effect'] = effect;
        return this;
    }
    public withAction(action: Array<string>): AuthorizeObsPolicyStatement {
        this['action'] = action;
        return this;
    }
    public withResource(resource: Array<string>): AuthorizeObsPolicyStatement {
        this['resource'] = resource;
        return this;
    }
}