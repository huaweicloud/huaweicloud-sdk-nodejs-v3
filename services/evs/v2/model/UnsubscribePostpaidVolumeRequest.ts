import { UnsubscribeVolumeRequestBody } from './UnsubscribeVolumeRequestBody';


export class UnsubscribePostpaidVolumeRequest {
    public body?: UnsubscribeVolumeRequestBody;
    public constructor() { 
    }
    public withBody(body: UnsubscribeVolumeRequestBody): UnsubscribePostpaidVolumeRequest {
        this['body'] = body;
        return this;
    }
}