import { Cause } from './Cause';


export class ValidateAuthResults {
    public action?: string;
    public verdict?: ValidateAuthResultsVerdictEnum | string;
    private 'action_id'?: string;
    public resource?: string;
    public cause?: Array<Cause>;
    public constructor() { 
    }
    public withAction(action: string): ValidateAuthResults {
        this['action'] = action;
        return this;
    }
    public withVerdict(verdict: ValidateAuthResultsVerdictEnum | string): ValidateAuthResults {
        this['verdict'] = verdict;
        return this;
    }
    public withActionId(actionId: string): ValidateAuthResults {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withResource(resource: string): ValidateAuthResults {
        this['resource'] = resource;
        return this;
    }
    public withCause(cause: Array<Cause>): ValidateAuthResults {
        this['cause'] = cause;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValidateAuthResultsVerdictEnum {
    ALLOW = 'allow',
    DENY = 'deny'
}
