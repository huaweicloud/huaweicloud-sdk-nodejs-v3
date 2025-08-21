import { RepositoryInheritSettingDto } from './RepositoryInheritSettingDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryInheritSettingResponse extends SdkResponse {
    public body?: Array<RepositoryInheritSettingDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryInheritSettingDto>): ShowRepositoryInheritSettingResponse {
        this['body'] = body;
        return this;
    }
}