import { AssociateListenerRequestBody } from './AssociateListenerRequestBody';


export class AssociateListenerRequest {
    private 'ip_group_id': string | undefined;
    public body?: AssociateListenerRequestBody;
    public constructor(ipGroupId?: any) { 
        this['ip_group_id'] = ipGroupId;
    }
    public withIpGroupId(ipGroupId: string): AssociateListenerRequest {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId() {
        return this['ip_group_id'];
    }
    public withBody(body: AssociateListenerRequestBody): AssociateListenerRequest {
        this['body'] = body;
        return this;
    }
}