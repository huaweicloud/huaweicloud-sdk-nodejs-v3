import { ExpandPhoneDataVolumeSizeRequestBody } from './ExpandPhoneDataVolumeSizeRequestBody';


export class ExpandPhoneDataVolumeSizeRequest {
    public body?: ExpandPhoneDataVolumeSizeRequestBody;
    public constructor() { 
    }
    public withBody(body: ExpandPhoneDataVolumeSizeRequestBody): ExpandPhoneDataVolumeSizeRequest {
        this['body'] = body;
        return this;
    }
}