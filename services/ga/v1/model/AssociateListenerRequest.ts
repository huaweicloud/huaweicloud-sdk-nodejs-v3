import { AssociateListenerRequestBody } from './AssociateListenerRequestBody';


export class AssociateListenerRequest {
    private 'ip_group_id'?: string;
    public body?: AssociateListenerRequestBody;
    public constructor(ipGroupId?: string) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): AssociateListenerRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string  | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId(): string | undefined {
        return this['ip_group_id'];
    }
    public withBody(body: AssociateListenerRequestBody): AssociateListenerRequest {
        this['body'] = body;
        return this;
    }
}