
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConnectivityTaskResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public connectivity?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowConnectivityTaskResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowConnectivityTaskResponse {
        this['message'] = message;
        return this;
    }
    public withConnectivity(connectivity: string): ShowConnectivityTaskResponse {
        this['connectivity'] = connectivity;
        return this;
    }
}