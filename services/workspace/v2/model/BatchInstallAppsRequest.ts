import { BatchAutoInstallAppsReq } from './BatchAutoInstallAppsReq';


export class BatchInstallAppsRequest {
    public body?: BatchAutoInstallAppsReq;
    public constructor() { 
    }
    public withBody(body: BatchAutoInstallAppsReq): BatchInstallAppsRequest {
        this['body'] = body;
        return this;
    }
}