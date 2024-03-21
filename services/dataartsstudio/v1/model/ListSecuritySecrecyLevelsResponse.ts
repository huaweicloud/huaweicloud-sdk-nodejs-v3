import { SecrecyLevel } from './SecrecyLevel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecuritySecrecyLevelsResponse extends SdkResponse {
    public total?: number;
    public content?: Array<SecrecyLevel>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecuritySecrecyLevelsResponse {
        this['total'] = total;
        return this;
    }
    public withContent(content: Array<SecrecyLevel>): ListSecuritySecrecyLevelsResponse {
        this['content'] = content;
        return this;
    }
}