import { BindMfaDevice } from './BindMfaDevice';


export class CreateBindingDeviceRequest {
    public body?: BindMfaDevice;
    public constructor() { 
    }
    public withBody(body: BindMfaDevice): CreateBindingDeviceRequest {
        this['body'] = body;
        return this;
    }
}