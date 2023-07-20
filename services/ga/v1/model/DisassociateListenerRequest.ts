import { DisassociateListenerRequestBody } from './DisassociateListenerRequestBody';


export class DisassociateListenerRequest {
    private 'ip_group_id'?: string;
    public body?: DisassociateListenerRequestBody;
    public constructor(ipGroupId?: string) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): DisassociateListenerRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string  | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId(): string | undefined {
        return this['ip_group_id'];
    }
    public withBody(body: DisassociateListenerRequestBody): DisassociateListenerRequest {
        this['body'] = body;
        return this;
    }
}