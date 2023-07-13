import { BatchDeleteIpListRequestBody } from './BatchDeleteIpListRequestBody';


export class BatchDeleteIpListRequest {
    private 'ipgroup_id': string | undefined;
    public body?: BatchDeleteIpListRequestBody;
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
    public withBody(body: BatchDeleteIpListRequestBody): BatchDeleteIpListRequest {
        this['body'] = body;
        return this;
    }
}