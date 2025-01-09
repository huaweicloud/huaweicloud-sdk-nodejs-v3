import { BatchChangeDesktopNetworkReq } from './BatchChangeDesktopNetworkReq';


export class BatchChangeDesktopNetworkRequest {
    public body?: BatchChangeDesktopNetworkReq;
    public constructor() { 
    }
    public withBody(body: BatchChangeDesktopNetworkReq): BatchChangeDesktopNetworkRequest {
        this['body'] = body;
        return this;
    }
}