
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFileBuildArchivesResponse extends SdkResponse {
    public status?: string;
    private 'trace_id'?: string;
    public result?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListFileBuildArchivesResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListFileBuildArchivesResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: object): ListFileBuildArchivesResponse {
        this['result'] = result;
        return this;
    }
}