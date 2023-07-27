
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddEipV2Response extends SdkResponse {
    private 'eip_id'?: string;
    private 'eip_address'?: string;
    private 'eip_status'?: string;
    private 'eip_ipv6_address'?: string;
    public constructor() { 
        super();
    }
    public withEipId(eipId: string): AddEipV2Response {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
    public withEipAddress(eipAddress: string): AddEipV2Response {
        this['eip_address'] = eipAddress;
        return this;
    }
    public set eipAddress(eipAddress: string  | undefined) {
        this['eip_address'] = eipAddress;
    }
    public get eipAddress(): string | undefined {
        return this['eip_address'];
    }
    public withEipStatus(eipStatus: string): AddEipV2Response {
        this['eip_status'] = eipStatus;
        return this;
    }
    public set eipStatus(eipStatus: string  | undefined) {
        this['eip_status'] = eipStatus;
    }
    public get eipStatus(): string | undefined {
        return this['eip_status'];
    }
    public withEipIpv6Address(eipIpv6Address: string): AddEipV2Response {
        this['eip_ipv6_address'] = eipIpv6Address;
        return this;
    }
    public set eipIpv6Address(eipIpv6Address: string  | undefined) {
        this['eip_ipv6_address'] = eipIpv6Address;
    }
    public get eipIpv6Address(): string | undefined {
        return this['eip_ipv6_address'];
    }
}