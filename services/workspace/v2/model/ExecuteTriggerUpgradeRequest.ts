import { ExecuteTriggerUpgradeRequestBody } from './ExecuteTriggerUpgradeRequestBody';


export class ExecuteTriggerUpgradeRequest {
    public body?: ExecuteTriggerUpgradeRequestBody;
    public constructor() { 
    }
    public withBody(body: ExecuteTriggerUpgradeRequestBody): ExecuteTriggerUpgradeRequest {
        this['body'] = body;
        return this;
    }
}