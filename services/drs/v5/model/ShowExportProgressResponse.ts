
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExportProgressResponse extends SdkResponse {
    private 'process_status'?: string;
    public constructor() { 
        super();
    }
    public withProcessStatus(processStatus: string): ShowExportProgressResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
}