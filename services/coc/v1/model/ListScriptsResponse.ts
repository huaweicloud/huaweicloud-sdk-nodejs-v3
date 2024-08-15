import { ScriptListPage } from './ScriptListPage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScriptsResponse extends SdkResponse {
    public data?: ScriptListPage;
    public constructor() { 
        super();
    }
    public withData(data: ScriptListPage): ListScriptsResponse {
        this['data'] = data;
        return this;
    }
}