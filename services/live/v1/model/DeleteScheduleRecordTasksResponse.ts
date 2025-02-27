
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteScheduleRecordTasksResponse extends SdkResponse {
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withXRequestId(xRequestId: string): DeleteScheduleRecordTasksResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}