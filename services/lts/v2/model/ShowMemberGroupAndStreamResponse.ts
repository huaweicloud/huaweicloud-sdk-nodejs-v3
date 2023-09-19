import { MemberGroupandStreamResults } from './MemberGroupandStreamResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMemberGroupAndStreamResponse extends SdkResponse {
    public results?: Array<MemberGroupandStreamResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<MemberGroupandStreamResults>): ShowMemberGroupAndStreamResponse {
        this['results'] = results;
        return this;
    }
}