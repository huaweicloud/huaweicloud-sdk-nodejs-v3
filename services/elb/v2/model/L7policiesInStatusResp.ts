import { L7rulesInStatusResp } from './L7rulesInStatusResp';


export class L7policiesInStatusResp {
    public id?: string;
    public name?: string;
    public rules?: Array<L7rulesInStatusResp>;
    public action?: L7policiesInStatusRespActionEnum | string;
    private 'provisioning_status'?: string;
    public constructor(id?: string, name?: string, rules?: Array<L7rulesInStatusResp>, action?: string, provisioningStatus?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['rules'] = rules;
        this['action'] = action;
        this['provisioning_status'] = provisioningStatus;
    }
    public withId(id: string): L7policiesInStatusResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): L7policiesInStatusResp {
        this['name'] = name;
        return this;
    }
    public withRules(rules: Array<L7rulesInStatusResp>): L7policiesInStatusResp {
        this['rules'] = rules;
        return this;
    }
    public withAction(action: L7policiesInStatusRespActionEnum | string): L7policiesInStatusResp {
        this['action'] = action;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): L7policiesInStatusResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum L7policiesInStatusRespActionEnum {
    REDIRECT_TO_POOL = 'REDIRECT_TO_POOL',
    REDIRECT_TO_LISTENER = 'REDIRECT_TO_LISTENER'
}
