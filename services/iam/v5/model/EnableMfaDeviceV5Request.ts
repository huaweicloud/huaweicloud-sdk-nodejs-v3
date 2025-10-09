import { EnableMfaDeviceReqBody } from './EnableMfaDeviceReqBody';


export class EnableMfaDeviceV5Request {
    public body?: EnableMfaDeviceReqBody;
    public constructor() { 
    }
    public withBody(body: EnableMfaDeviceReqBody): EnableMfaDeviceV5Request {
        this['body'] = body;
        return this;
    }
}