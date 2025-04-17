import { ScriptInfo } from './ScriptInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryScriptsResponse extends SdkResponse {
    public total?: number;
    public scripts?: Array<ScriptInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFactoryScriptsResponse {
        this['total'] = total;
        return this;
    }
    public withScripts(scripts: Array<ScriptInfo>): ListFactoryScriptsResponse {
        this['scripts'] = scripts;
        return this;
    }
}