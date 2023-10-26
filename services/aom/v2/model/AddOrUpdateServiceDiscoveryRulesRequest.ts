import { AppRulesBody } from './AppRulesBody';


export class AddOrUpdateServiceDiscoveryRulesRequest {
    public body?: AppRulesBody;
    public constructor() { 
    }
    public withBody(body: AppRulesBody): AddOrUpdateServiceDiscoveryRulesRequest {
        this['body'] = body;
        return this;
    }
}