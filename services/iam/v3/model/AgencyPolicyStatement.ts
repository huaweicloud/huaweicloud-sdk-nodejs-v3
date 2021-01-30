import { AgencyPolicyResource } from './AgencyPolicyResource';


export class AgencyPolicyStatement {
    private 'Action': Array<AgencyPolicyStatementActionEnum> | undefined;
    private 'Effect': AgencyPolicyStatementEffectEnum | undefined;
    private 'Resource': AgencyPolicyResource | undefined;
    public constructor(action: any, effect: any, resource: any) { 
        this['Action'] = action;
        this['Effect'] = effect;
        this['Resource'] = resource;
    }
    public withAction(action: Array<AgencyPolicyStatementActionEnum>): AgencyPolicyStatement {
        this['Action'] = action;
        return this;
    }
    public set action(action: Array<AgencyPolicyStatementActionEnum> | undefined) {
        this['Action'] = action;
    }
    public get action() {
        return this['Action'];
    }
    public withEffect(effect: AgencyPolicyStatementEffectEnum): AgencyPolicyStatement {
        this['Effect'] = effect;
        return this;
    }
    public set effect(effect: AgencyPolicyStatementEffectEnum | undefined) {
        this['Effect'] = effect;
    }
    public get effect() {
        return this['Effect'];
    }
    public withResource(resource: AgencyPolicyResource): AgencyPolicyStatement {
        this['Resource'] = resource;
        return this;
    }
    public set resource(resource: AgencyPolicyResource | undefined) {
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
