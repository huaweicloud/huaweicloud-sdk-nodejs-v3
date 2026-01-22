import { ShowImportStatusId } from './ShowImportStatusId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImportStatusResponse extends SdkResponse {
    public data?: ShowImportStatusId;
    public constructor() { 
        super();
    }
    public withData(data: ShowImportStatusId): ShowImportStatusResponse {
        this['data'] = data;
        return this;
    }
}