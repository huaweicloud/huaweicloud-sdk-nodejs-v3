import { AddOuNameInfoV2Req } from './AddOuNameInfoV2Req';


export class AddOuRequest {
    public body?: AddOuNameInfoV2Req;
    public constructor() { 
    }
    public withBody(body: AddOuNameInfoV2Req): AddOuRequest {
        this['body'] = body;
        return this;
    }
}