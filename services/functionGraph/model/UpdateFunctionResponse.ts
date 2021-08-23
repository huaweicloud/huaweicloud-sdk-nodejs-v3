import { FunctionInfo } from "./FunctionInfo";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFunctionResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'function_info'?: FunctionInfo | undefined;

    public constructor(){
        super();
    }
    public withRequestId(requestId: string): UpdateFunctionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withFunctionInfo(functionInfo: FunctionInfo): UpdateFunctionResponse {
        this['function_info'] = functionInfo;
        return this;
    }
    public set functionInfo(functionInfo: FunctionInfo | undefined) {
        this['function_info'] = functionInfo;
    }
    public get functionInfo(){
        return this['function_info'];
    }
}