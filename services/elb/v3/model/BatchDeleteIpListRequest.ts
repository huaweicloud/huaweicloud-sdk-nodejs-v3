import { BatchDeleteIpGroupIpListRequestBody } from './BatchDeleteIpGroupIpListRequestBody';


export class BatchDeleteIpListRequest {
    private 'ipgroup_id': string | undefined;
    public body?: BatchDeleteIpGroupIpListRequestBody;
    public constructor(ipgroupId?: any) { 
        this['ipgroup_id'] = ipgroupId;
    }
    public withIpgroupId(ipgroupId: string): BatchDeleteIpListRequest {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId() {
        return this['ipgroup_id'];
    }
    public withBody(body: BatchDeleteIpGroupIpListRequestBody): BatchDeleteIpListRequest {
        this['body'] = body;
        return this;
    }
}