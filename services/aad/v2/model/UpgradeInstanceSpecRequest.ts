import { UpgradeInstanceSpecV2RequestBody } from './UpgradeInstanceSpecV2RequestBody';


export class UpgradeInstanceSpecRequest {
    public body?: UpgradeInstanceSpecV2RequestBody;
    public constructor() { 
    }
    public withBody(body: UpgradeInstanceSpecV2RequestBody): UpgradeInstanceSpecRequest {
        this['body'] = body;
        return this;
    }
}