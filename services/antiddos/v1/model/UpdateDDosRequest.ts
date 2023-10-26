import { UpdateAntiDDosServiceRequestBody } from './UpdateAntiDDosServiceRequestBody';


export class UpdateDDosRequest {
    private 'floating_ip_id'?: string;
    public ip?: string;
    public body?: UpdateAntiDDosServiceRequestBody;
    public constructor(floatingIpId?: string) { 
        this['floating_ip_id'] = floatingIpId;
    }
    public withFloatingIpId(floatingIpId: string): UpdateDDosRequest {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withIp(ip: string): UpdateDDosRequest {
        this['ip'] = ip;
        return this;
    }
    public withBody(body: UpdateAntiDDosServiceRequestBody): UpdateDDosRequest {
        this['body'] = body;
        return this;
    }
}