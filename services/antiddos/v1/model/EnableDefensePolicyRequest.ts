import { OpenAntiDDosServiceRequestBody } from './OpenAntiDDosServiceRequestBody';


export class EnableDefensePolicyRequest {
    private 'floating_ip_id'?: string;
    public body?: OpenAntiDDosServiceRequestBody;
    public constructor(floatingIpId?: string) { 
        this['floating_ip_id'] = floatingIpId;
    }
    public withFloatingIpId(floatingIpId: string): EnableDefensePolicyRequest {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withBody(body: OpenAntiDDosServiceRequestBody): EnableDefensePolicyRequest {
        this['body'] = body;
        return this;
    }
}