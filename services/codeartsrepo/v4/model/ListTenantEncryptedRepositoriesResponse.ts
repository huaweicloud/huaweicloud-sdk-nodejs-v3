import { RepoEncryptionDto } from './RepoEncryptionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantEncryptedRepositoriesResponse extends SdkResponse {
    public body?: Array<RepoEncryptionDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepoEncryptionDto>): ListTenantEncryptedRepositoriesResponse {
        this['body'] = body;
        return this;
    }
}