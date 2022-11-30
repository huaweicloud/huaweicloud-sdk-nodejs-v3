import { UnbindMfaDevice } from './UnbindMfaDevice';


export class DeleteBindingDeviceRequest {
    public body?: UnbindMfaDevice;
    public constructor() { 
    }
    public withBody(body: UnbindMfaDevice): DeleteBindingDeviceRequest {
        this['body'] = body;
        return this;
    }
}