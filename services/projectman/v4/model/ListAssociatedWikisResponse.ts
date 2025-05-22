import { AttachWikiDetail } from './AttachWikiDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssociatedWikisResponse extends SdkResponse {
    public wikis?: Array<AttachWikiDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withWikis(wikis: Array<AttachWikiDetail>): ListAssociatedWikisResponse {
        this['wikis'] = wikis;
        return this;
    }
    public withTotal(total: number): ListAssociatedWikisResponse {
        this['total'] = total;
        return this;
    }
}