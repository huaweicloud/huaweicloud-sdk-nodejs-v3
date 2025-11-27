import { ListMeta } from './ListMeta';
import { Pod } from './Pod';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGitOpsStatusResponse extends SdkResponse {
    public metadata?: ListMeta;
    public items?: Array<Pod>;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: ListMeta): ShowGitOpsStatusResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<Pod>): ShowGitOpsStatusResponse {
        this['items'] = items;
        return this;
    }
}