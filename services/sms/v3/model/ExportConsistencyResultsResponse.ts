
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportConsistencyResultsResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ExportConsistencyResultsResponse {
        this['body'] = body;
        return this;
    }
}