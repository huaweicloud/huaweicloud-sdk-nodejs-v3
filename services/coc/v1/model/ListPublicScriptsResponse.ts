import { PublicScriptListPage } from './PublicScriptListPage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicScriptsResponse extends SdkResponse {
    public data?: PublicScriptListPage;
    public constructor() { 
        super();
    }
    public withData(data: PublicScriptListPage): ListPublicScriptsResponse {
        this['data'] = data;
        return this;
    }
}