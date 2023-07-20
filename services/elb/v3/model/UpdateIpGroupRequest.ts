import { UpdateIpGroupRequestBody } from './UpdateIpGroupRequestBody';


export class UpdateIpGroupRequest {
    private 'ipgroup_id'?: string;
    public body?: UpdateIpGroupRequestBody;
    public constructor(ipgroupId?: string) { 
        this['ipgroup_id'] = ipgroupId;
    }
    public withIpgroupId(ipgroupId: string): UpdateIpGroupRequest {
        this['ipgroup_id'] = ipgroupId;
        return this;
    }
    public set ipgroupId(ipgroupId: string  | undefined) {
        this['ipgroup_id'] = ipgroupId;
    }
    public get ipgroupId(): string | undefined {
        return this['ipgroup_id'];
    }
    public withBody(body: UpdateIpGroupRequestBody): UpdateIpGroupRequest {
        this['body'] = body;
        return this;
    }
}