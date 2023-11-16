import { UpdateProtectedIpBody } from './UpdateProtectedIpBody';


export class UpdateTagForProtectedIpRequest {
    public body?: UpdateProtectedIpBody;
    public constructor() { 
    }
    public withBody(body: UpdateProtectedIpBody): UpdateTagForProtectedIpRequest {
        this['body'] = body;
        return this;
    }
}