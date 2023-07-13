import { UpdateIpGroupRequestBody } from './UpdateIpGroupRequestBody';


export class UpdateIpGroupRequest {
    private 'ip_group_id': string | undefined;
    public body?: UpdateIpGroupRequestBody;
    public constructor(ipGroupId?: any) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): UpdateIpGroupRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId() {
        return this['ip_group_id'];
    }
    public withBody(body: UpdateIpGroupRequestBody): UpdateIpGroupRequest {
        this['body'] = body;
        return this;
    }
}