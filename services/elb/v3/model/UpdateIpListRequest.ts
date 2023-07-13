import { UpdateIpListRequestBody } from './UpdateIpListRequestBody';


export class UpdateIpListRequest {
    private 'ipgroup_id': string | undefined;
    public body?: UpdateIpListRequestBody;
    public constructor(ipgroupId?: any) { 
        this['ipgroup_id'] = ipgroupId;
    }
    public withIpgroupId(ipgroupId: string): UpdateIpListRequest {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId() {
        return this['ipgroup_id'];
    }
    public withBody(body: UpdateIpListRequestBody): UpdateIpListRequest {
        this['body'] = body;
        return this;
    }
}