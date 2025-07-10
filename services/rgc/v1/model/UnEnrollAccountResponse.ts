
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnEnrollAccountResponse extends SdkResponse {
    private 'operation_id'?: string;
    public constructor() { 
        super();
    }
    public withOperationId(operationId: string): UnEnrollAccountResponse {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
}