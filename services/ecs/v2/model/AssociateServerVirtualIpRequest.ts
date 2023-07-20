import { AssociateServerVirtualIpRequestBody } from './AssociateServerVirtualIpRequestBody';


export class AssociateServerVirtualIpRequest {
    private 'nic_id'?: string;
    public body?: AssociateServerVirtualIpRequestBody;
    public constructor(nicId?: string) { 
        this['nic_id'] = nicId;
    }
    public withNicId(nicId: string): AssociateServerVirtualIpRequest {
        this['nic_id'] = nicId;
        return this;
    }
    public set nicId(nicId: string  | undefined) {
        this['nic_id'] = nicId;
    }
    public get nicId(): string | undefined {
        return this['nic_id'];
    }
    public withBody(body: AssociateServerVirtualIpRequestBody): AssociateServerVirtualIpRequest {
        this['body'] = body;
        return this;
    }
}