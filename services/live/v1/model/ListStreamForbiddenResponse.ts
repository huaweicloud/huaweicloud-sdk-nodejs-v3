import { StreamForbiddenList } from './StreamForbiddenList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStreamForbiddenResponse extends SdkResponse {
    public total?: number;
    public blocks?: Array<StreamForbiddenList>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListStreamForbiddenResponse {
        this['total'] = total;
        return this;
    }
    public withBlocks(blocks: Array<StreamForbiddenList>): ListStreamForbiddenResponse {
        this['blocks'] = blocks;
        return this;
    }
}