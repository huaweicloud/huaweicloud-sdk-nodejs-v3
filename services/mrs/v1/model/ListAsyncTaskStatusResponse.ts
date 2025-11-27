
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncTaskStatusResponse extends SdkResponse {
    private 'Status'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListAsyncTaskStatusResponse {
        this['Status'] = status;
        return this;
    }
    public set status(status: string  | undefined) {
        this['Status'] = status;
    }
    public get status(): string | undefined {
        return this['Status'];
    }
}