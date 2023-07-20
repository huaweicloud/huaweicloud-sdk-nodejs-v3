import { AddIpGroupIpRequestBody } from './AddIpGroupIpRequestBody';


export class AddIpGroupIpRequest {
    private 'ip_group_id'?: string;
    public body?: AddIpGroupIpRequestBody;
    public constructor(ipGroupId?: string) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): AddIpGroupIpRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string  | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId(): string | undefined {
        return this['ip_group_id'];
    }
    public withBody(body: AddIpGroupIpRequestBody): AddIpGroupIpRequest {
        this['body'] = body;
        return this;
    }
}