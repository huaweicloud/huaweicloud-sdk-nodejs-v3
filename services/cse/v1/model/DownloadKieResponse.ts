import { CreateKieReq } from './CreateKieReq';
import { DownloadKieResponseBodyMetadata } from './DownloadKieResponseBodyMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadKieResponse extends SdkResponse {
    public metadata?: DownloadKieResponseBodyMetadata;
    public data?: Array<CreateKieReq>;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: DownloadKieResponseBodyMetadata): DownloadKieResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withData(data: Array<CreateKieReq>): DownloadKieResponse {
        this['data'] = data;
        return this;
    }
}