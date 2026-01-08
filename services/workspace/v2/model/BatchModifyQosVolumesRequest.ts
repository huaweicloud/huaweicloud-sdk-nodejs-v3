import { BatchModifyQosVolumesReq } from './BatchModifyQosVolumesReq';


export class BatchModifyQosVolumesRequest {
    public body?: BatchModifyQosVolumesReq;
    public constructor() { 
    }
    public withBody(body: BatchModifyQosVolumesReq): BatchModifyQosVolumesRequest {
        this['body'] = body;
        return this;
    }
}