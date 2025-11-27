
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteCompositeHostsResponse extends SdkResponse {
    private 'host_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withHostIds(hostIds: Array<string>): BatchDeleteCompositeHostsResponse {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
}