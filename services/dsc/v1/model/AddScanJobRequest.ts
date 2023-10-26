import { ScanJobRequest } from './ScanJobRequest';


export class AddScanJobRequest {
    public body?: ScanJobRequest;
    public constructor() { 
    }
    public withBody(body: ScanJobRequest): AddScanJobRequest {
        this['body'] = body;
        return this;
    }
}