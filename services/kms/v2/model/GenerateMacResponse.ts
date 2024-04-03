
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GenerateMacResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'mac_algorithm'?: string;
    public mac?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): GenerateMacResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withMacAlgorithm(macAlgorithm: string): GenerateMacResponse {
        this['mac_algorithm'] = macAlgorithm;
        return this;
    }
    public set macAlgorithm(macAlgorithm: string  | undefined) {
        this['mac_algorithm'] = macAlgorithm;
    }
    public get macAlgorithm(): string | undefined {
        return this['mac_algorithm'];
    }
    public withMac(mac: string): GenerateMacResponse {
        this['mac'] = mac;
        return this;
    }
}