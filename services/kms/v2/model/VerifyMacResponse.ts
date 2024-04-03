
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class VerifyMacResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'mac_algorithm'?: string;
    private 'mac_valid'?: boolean;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): VerifyMacResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withMacAlgorithm(macAlgorithm: string): VerifyMacResponse {
        this['mac_algorithm'] = macAlgorithm;
        return this;
    }
    public set macAlgorithm(macAlgorithm: string  | undefined) {
        this['mac_algorithm'] = macAlgorithm;
    }
    public get macAlgorithm(): string | undefined {
        return this['mac_algorithm'];
    }
    public withMacValid(macValid: boolean): VerifyMacResponse {
        this['mac_valid'] = macValid;
        return this;
    }
    public set macValid(macValid: boolean  | undefined) {
        this['mac_valid'] = macValid;
    }
    public get macValid(): boolean | undefined {
        return this['mac_valid'];
    }
}