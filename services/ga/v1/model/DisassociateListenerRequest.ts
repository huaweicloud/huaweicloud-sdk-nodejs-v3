import { DisassociateListenerRequestBody } from './DisassociateListenerRequestBody';


export class DisassociateListenerRequest {
    private 'ip_group_id': string | undefined;
    public body?: DisassociateListenerRequestBody;
    public constructor(ipGroupId?: any) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): DisassociateListenerRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId() {
        return this['ip_group_id'];
    }
    public withBody(body: DisassociateListenerRequestBody): DisassociateListenerRequest {
        this['body'] = body;
        return this;
    }
}