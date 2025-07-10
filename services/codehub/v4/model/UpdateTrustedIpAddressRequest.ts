import { AddTrustedIpAddressRequestBody } from './AddTrustedIpAddressRequestBody';


export class UpdateTrustedIpAddressRequest {
    public id?: number;
    private 'ip_id'?: number;
    public body?: AddTrustedIpAddressRequestBody;
    public constructor(id?: number, ipId?: number) { 
        this['id'] = id;
        this['ip_id'] = ipId;
    }
    public withId(id: number): UpdateTrustedIpAddressRequest {
        this['id'] = id;
        return this;
    }
    public withIpId(ipId: number): UpdateTrustedIpAddressRequest {
        this['ip_id'] = ipId;
        return this;
    }
    public set ipId(ipId: number  | undefined) {
        this['ip_id'] = ipId;
    }
    public get ipId(): number | undefined {
        return this['ip_id'];
    }
    public withBody(body: AddTrustedIpAddressRequestBody): UpdateTrustedIpAddressRequest {
        this['body'] = body;
        return this;
    }
}