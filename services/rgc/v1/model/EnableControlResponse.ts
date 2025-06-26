
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableControlResponse extends SdkResponse {
    private 'control_operate_request_id'?: string;
    public constructor() { 
        super();
    }
    public withControlOperateRequestId(controlOperateRequestId: string): EnableControlResponse {
        this['control_operate_request_id'] = controlOperateRequestId;
        return this;
    }
    public set controlOperateRequestId(controlOperateRequestId: string  | undefined) {
        this['control_operate_request_id'] = controlOperateRequestId;
    }
    public get controlOperateRequestId(): string | undefined {
        return this['control_operate_request_id'];
    }
}