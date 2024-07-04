
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrimaryRegionResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'primary_region'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): UpdatePrimaryRegionResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withPrimaryRegion(primaryRegion: string): UpdatePrimaryRegionResponse {
        this['primary_region'] = primaryRegion;
        return this;
    }
    public set primaryRegion(primaryRegion: string  | undefined) {
        this['primary_region'] = primaryRegion;
    }
    public get primaryRegion(): string | undefined {
        return this['primary_region'];
    }
}