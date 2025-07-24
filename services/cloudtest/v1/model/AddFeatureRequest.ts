import { AddTestItemInfo } from './AddTestItemInfo';


export class AddFeatureRequest {
    public body?: AddTestItemInfo;
    public constructor() { 
    }
    public withBody(body: AddTestItemInfo): AddFeatureRequest {
        this['body'] = body;
        return this;
    }
}