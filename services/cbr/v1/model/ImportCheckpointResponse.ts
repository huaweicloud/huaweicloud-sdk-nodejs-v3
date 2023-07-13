import { SyncRespBody } from './SyncRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportCheckpointResponse extends SdkResponse {
    public sync?: SyncRespBody;
    public constructor() { 
        super();
    }
    public withSync(sync: SyncRespBody): ImportCheckpointResponse {
        this['sync'] = sync;
        return this;
    }
}