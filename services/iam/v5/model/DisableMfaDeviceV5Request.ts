import { DisableMfaDeviceReqBody } from './DisableMfaDeviceReqBody';


export class DisableMfaDeviceV5Request {
    public body?: DisableMfaDeviceReqBody;
    public constructor() { 
    }
    public withBody(body: DisableMfaDeviceReqBody): DisableMfaDeviceV5Request {
        this['body'] = body;
        return this;
    }
}