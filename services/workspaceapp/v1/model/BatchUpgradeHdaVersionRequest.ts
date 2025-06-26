import { BatchUpgradeHdaVersionReq } from './BatchUpgradeHdaVersionReq';


export class BatchUpgradeHdaVersionRequest {
    public body?: BatchUpgradeHdaVersionReq;
    public constructor() { 
    }
    public withBody(body: BatchUpgradeHdaVersionReq): BatchUpgradeHdaVersionRequest {
        this['body'] = body;
        return this;
    }
}