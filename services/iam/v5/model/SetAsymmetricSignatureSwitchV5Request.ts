import { SetAsymmetricSignatureReq } from './SetAsymmetricSignatureReq';


export class SetAsymmetricSignatureSwitchV5Request {
    public body?: SetAsymmetricSignatureReq;
    public constructor() { 
    }
    public withBody(body: SetAsymmetricSignatureReq): SetAsymmetricSignatureSwitchV5Request {
        this['body'] = body;
        return this;
    }
}