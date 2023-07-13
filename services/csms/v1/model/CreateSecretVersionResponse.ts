import { VersionMetadata } from './VersionMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecretVersionResponse extends SdkResponse {
    private 'version_metadata'?: VersionMetadata | undefined;
    public constructor() { 
        super();
    }
    public withVersionMetadata(versionMetadata: VersionMetadata): CreateSecretVersionResponse {
        this['version_metadata'] = versionMetadata;
        return this;
    }
    public set versionMetadata(versionMetadata: VersionMetadata | undefined) {
        this['version_metadata'] = versionMetadata;
    }
    public get versionMetadata() {
        return this['version_metadata'];
    }
}