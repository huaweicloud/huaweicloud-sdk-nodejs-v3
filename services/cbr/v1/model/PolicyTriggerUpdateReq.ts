import { PolicyTriggerPropertiesUpdateReq } from './PolicyTriggerPropertiesUpdateReq';


export class PolicyTriggerUpdateReq {
    public properties?: PolicyTriggerPropertiesUpdateReq;
    public constructor(properties?: PolicyTriggerPropertiesUpdateReq) { 
        this['properties'] = properties;
    }
    public withProperties(properties: PolicyTriggerPropertiesUpdateReq): PolicyTriggerUpdateReq {
        this['properties'] = properties;
        return this;
    }
}