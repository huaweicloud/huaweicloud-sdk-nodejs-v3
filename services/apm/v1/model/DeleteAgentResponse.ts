
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAgentResponse extends SdkResponse {
    private 'delete_status'?: number;
    public constructor() { 
        super();
    }
    public withDeleteStatus(deleteStatus: number): DeleteAgentResponse {
        this['delete_status'] = deleteStatus;
        return this;
    }
    public set deleteStatus(deleteStatus: number  | undefined) {
        this['delete_status'] = deleteStatus;
    }
    public get deleteStatus(): number | undefined {
        return this['delete_status'];
    }
}