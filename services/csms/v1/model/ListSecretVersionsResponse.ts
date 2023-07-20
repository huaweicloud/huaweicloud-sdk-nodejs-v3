import { PageInfo } from './PageInfo';
import { VersionMetadata } from './VersionMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecretVersionsResponse extends SdkResponse {
    private 'version_metadatas'?: Array<VersionMetadata>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withVersionMetadatas(versionMetadatas: Array<VersionMetadata>): ListSecretVersionsResponse {
        this['version_metadatas'] = versionMetadatas;
        return this;
    }
    public set versionMetadatas(versionMetadatas: Array<VersionMetadata>  | undefined) {
        this['version_metadatas'] = versionMetadatas;
    }
    public get versionMetadatas(): Array<VersionMetadata> | undefined {
        return this['version_metadatas'];
    }
    public withPageInfo(pageInfo: PageInfo): ListSecretVersionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}