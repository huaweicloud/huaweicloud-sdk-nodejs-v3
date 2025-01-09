import { PageResp } from './PageResp';
import { ScriptSimpleInfo } from './ScriptSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScriptsResponse extends SdkResponse {
    public count?: number;
    public scripts?: Array<ScriptSimpleInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListScriptsResponse {
        this['count'] = count;
        return this;
    }
    public withScripts(scripts: Array<ScriptSimpleInfo>): ListScriptsResponse {
        this['scripts'] = scripts;
        return this;
    }
}