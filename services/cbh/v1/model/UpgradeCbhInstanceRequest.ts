import { UpgradeCbhRequestBody } from './UpgradeCbhRequestBody';


export class UpgradeCbhInstanceRequest {
    public body?: UpgradeCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: UpgradeCbhRequestBody): UpgradeCbhInstanceRequest {
        this['body'] = body;
        return this;
    }
}