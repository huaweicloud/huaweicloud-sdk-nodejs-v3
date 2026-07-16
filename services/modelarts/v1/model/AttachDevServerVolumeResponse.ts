
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachDevServerVolumeResponse extends SdkResponse {
    private 'operation_id'?: string;
    private 'operation_status'?: string;
    private 'operation_type'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOperationId(operationId: string): AttachDevServerVolumeResponse {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withOperationStatus(operationStatus: string): AttachDevServerVolumeResponse {
        this['operation_status'] = operationStatus;
        return this;
    }
    public set operationStatus(operationStatus: string  | undefined) {
        this['operation_status'] = operationStatus;
    }
    public get operationStatus(): string | undefined {
        return this['operation_status'];
    }
    public withOperationType(operationType: string): AttachDevServerVolumeResponse {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withXRequestId(xRequestId: string): AttachDevServerVolumeResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}