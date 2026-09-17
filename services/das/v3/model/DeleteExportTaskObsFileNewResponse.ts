
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteExportTaskObsFileNewResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): DeleteExportTaskObsFileNewResponse {
        this['success'] = success;
        return this;
    }
}