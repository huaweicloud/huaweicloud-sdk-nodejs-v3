import { UpgradeCbhRequestBody } from './UpgradeCbhRequestBody';


export class UpgradeInstanceRequest {
    public body?: UpgradeCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: UpgradeCbhRequestBody): UpgradeInstanceRequest {
        this['body'] = body;
        return this;
    }
}