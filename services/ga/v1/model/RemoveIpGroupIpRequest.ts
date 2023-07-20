import { RemoveIpGroupIpRequestBody } from './RemoveIpGroupIpRequestBody';


export class RemoveIpGroupIpRequest {
    private 'ip_group_id'?: string;
    public body?: RemoveIpGroupIpRequestBody;
    public constructor(ipGroupId?: string) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): RemoveIpGroupIpRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string  | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId(): string | undefined {
        return this['ip_group_id'];
    }
    public withBody(body: RemoveIpGroupIpRequestBody): RemoveIpGroupIpRequest {
        this['body'] = body;
        return this;
    }
}