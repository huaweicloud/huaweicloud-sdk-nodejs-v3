import { AgencyPolicyResource } from './AgencyPolicyResource';


export class AgencyPolicyStatement {
    private 'Action'?: Array<AgencyPolicyStatementActionEnum> | Array<string>;
    private 'Effect'?: AgencyPolicyStatementEffectEnum | string;
    private 'Resource'?: AgencyPolicyResource;
    public constructor(action?: Array<string>, effect?: string, resource?: AgencyPolicyResource) { 
        this['Action'] = action;
        this['Effect'] = effect;
        this['Resource'] = resource;
    }
    public withAction(action: Array<AgencyPolicyStatementActionEnum> | Array<string>): AgencyPolicyStatement {
        this['Action'] = action;
        return this;
    }
    public set action(action: Array<AgencyPolicyStatementActionEnum> | Array<string>  | undefined) {
        this['Action'] = action;
    }
    public get action(): Array<AgencyPolicyStatementActionEnum> | Array<string> | undefined {
        return this['Action'];
    }
    public withEffect(effect: AgencyPolicyStatementEffectEnum | string): AgencyPolicyStatement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: AgencyPolicyStatementEffectEnum | string  | undefined) {
        this['Effect'] = effect;
    }
    public get effect(): AgencyPolicyStatementEffectEnum | string | undefined {
        return this['Effect'];
    }
    public withResource(resource: AgencyPolicyResource): AgencyPolicyStatement {
        this['Resource'] = resource;
        return this;
    }
    public set resource(resource: AgencyPolicyResource  | undefined) {
        this['Resource'] = resource;
    }
    public get resource(): AgencyPolicyResource | undefined {
        return this['Resource'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgencyPolicyStatementActionEnum {
    IAMAGENCIESASSUME = 'iam:agencies:assume'
}
/**
    * @export
    * @enum {string}
    */
export enum AgencyPolicyStatementEffectEnum {
    ALLOW = 'Allow',
    DENY = 'Deny'
}
