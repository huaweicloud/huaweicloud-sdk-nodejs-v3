
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AsyncInvokeReservedFunctionResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'Content-Type'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): AsyncInvokeReservedFunctionResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withContentType(contentType: string): AsyncInvokeReservedFunctionResponse {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}