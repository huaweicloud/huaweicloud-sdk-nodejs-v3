import { ScriptTag } from './ScriptTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScriptResourceTagsResponse extends SdkResponse {
    public tags?: Array<ScriptTag>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ScriptTag>): ListScriptResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotal(total: number): ListScriptResourceTagsResponse {
        this['total'] = total;
        return this;
    }
}