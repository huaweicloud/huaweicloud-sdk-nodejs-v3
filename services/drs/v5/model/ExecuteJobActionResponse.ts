
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteJobActionResponse extends SdkResponse {
    private 'query_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withQueryId(queryId: string): ExecuteJobActionResponse {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId() {
        return this['query_id'];
    }
}