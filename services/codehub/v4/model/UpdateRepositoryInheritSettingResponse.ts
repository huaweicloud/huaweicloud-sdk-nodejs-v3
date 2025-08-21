import { RepositoryInheritSettingDto } from './RepositoryInheritSettingDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepositoryInheritSettingResponse extends SdkResponse {
    public body?: Array<RepositoryInheritSettingDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryInheritSettingDto>): UpdateRepositoryInheritSettingResponse {
        this['body'] = body;
        return this;
    }
}