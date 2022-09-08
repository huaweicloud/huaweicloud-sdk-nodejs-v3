import { CinderCreateVolumeTransferRequestBody } from './CinderCreateVolumeTransferRequestBody';


export class CinderCreateVolumeTransferRequest {
    public body?: CinderCreateVolumeTransferRequestBody;
    public constructor() { 
    }
    public withBody(body: CinderCreateVolumeTransferRequestBody): CinderCreateVolumeTransferRequest {
        this['body'] = body;
        return this;
    }
}