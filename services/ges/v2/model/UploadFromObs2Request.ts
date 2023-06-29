import { UploadFromObsReq } from './UploadFromObsReq';


export class UploadFromObs2Request {
    public body?: UploadFromObsReq;
    public constructor() { 
    }
    public withBody(body: UploadFromObsReq): UploadFromObs2Request {
        this['body'] = body;
        return this;
    }
}