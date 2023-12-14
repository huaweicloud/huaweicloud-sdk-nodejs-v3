import { IPAuthInfo } from './IPAuthInfo';


export class UpdateIpAuthListRequest {
    public body?: IPAuthInfo;
    public constructor() { 
    }
    public withBody(body: IPAuthInfo): UpdateIpAuthListRequest {
        this['body'] = body;
        return this;
    }
}