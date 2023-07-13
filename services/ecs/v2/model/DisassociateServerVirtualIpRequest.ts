import { DisassociateServerVirtualIpRequestBody } from './DisassociateServerVirtualIpRequestBody';


export class DisassociateServerVirtualIpRequest {
    private 'nic_id': string | undefined;
    public body?: DisassociateServerVirtualIpRequestBody;
    public constructor(nicId?: any) { 
        this['nic_id'] = nicId;
    }
    public withNicId(nicId: string): DisassociateServerVirtualIpRequest {
        this['nic_id'] = nicId;
        return this;
    }
    public set nicId(nicId: string | undefined) {
        this['nic_id'] = nicId;
    }
    public get nicId() {
        return this['nic_id'];
    }
    public withBody(body: DisassociateServerVirtualIpRequestBody): DisassociateServerVirtualIpRequest {
        this['body'] = body;
        return this;
    }
}