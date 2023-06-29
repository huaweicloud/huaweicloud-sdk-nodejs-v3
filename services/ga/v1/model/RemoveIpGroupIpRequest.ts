import { RemoveIpGroupIpRequestBody } from './RemoveIpGroupIpRequestBody';


export class RemoveIpGroupIpRequest {
    private 'ip_group_id': string | undefined;
    public body?: RemoveIpGroupIpRequestBody;
    public constructor(ipGroupId?: any) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): RemoveIpGroupIpRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId() {
        return this['ip_group_id'];
    }
    public withBody(body: RemoveIpGroupIpRequestBody): RemoveIpGroupIpRequest {
        this['body'] = body;
        return this;
    }
}