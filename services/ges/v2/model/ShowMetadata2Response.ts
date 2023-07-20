import { ShowMetadataRespGesMetadata } from './ShowMetadataRespGesMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetadata2Response extends SdkResponse {
    public encrypted?: boolean;
    private 'master_key_name'?: string;
    private 'master_key_id'?: string;
    private 'ges_metadata'?: ShowMetadataRespGesMetadata;
    public constructor() { 
        super();
    }
    public withEncrypted(encrypted: boolean): ShowMetadata2Response {
        this['encrypted'] = encrypted;
        return this;
    }
    public withMasterKeyName(masterKeyName: string): ShowMetadata2Response {
        this['master_key_name'] = masterKeyName;
        return this;
    }
    public set masterKeyName(masterKeyName: string  | undefined) {
        this['master_key_name'] = masterKeyName;
    }
    public get masterKeyName(): string | undefined {
        return this['master_key_name'];
    }
    public withMasterKeyId(masterKeyId: string): ShowMetadata2Response {
        this['master_key_id'] = masterKeyId;
        return this;
    }
    public set masterKeyId(masterKeyId: string  | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId(): string | undefined {
        return this['master_key_id'];
    }
    public withGesMetadata(gesMetadata: ShowMetadataRespGesMetadata): ShowMetadata2Response {
        this['ges_metadata'] = gesMetadata;
        return this;
    }
    public set gesMetadata(gesMetadata: ShowMetadataRespGesMetadata  | undefined) {
        this['ges_metadata'] = gesMetadata;
    }
    public get gesMetadata(): ShowMetadataRespGesMetadata | undefined {
        return this['ges_metadata'];
    }
}