import { NeutronUpdateFloatingIpRequestBody } from './NeutronUpdateFloatingIpRequestBody';


export class NeutronUpdateFloatingIpRequest {
    private 'floatingip_id'?: string;
    public body?: NeutronUpdateFloatingIpRequestBody;
    public constructor(floatingipId?: string) { 
        this['floatingip_id'] = floatingipId;
    }
    public withFloatingipId(floatingipId: string): NeutronUpdateFloatingIpRequest {
        this['floatingip_id'] = floatingipId;
        return this;
    }
    public set floatingipId(floatingipId: string  | undefined) {
        this['floatingip_id'] = floatingipId;
    }
    public get floatingipId(): string | undefined {
        return this['floatingip_id'];
    }
    public withBody(body: NeutronUpdateFloatingIpRequestBody): NeutronUpdateFloatingIpRequest {
        this['body'] = body;
        return this;
    }
}