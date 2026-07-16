import { ServerOperationError } from './ServerOperationError';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetHyperinstanceOperationResponse extends SdkResponse {
    private 'operation_id'?: string;
    private 'operation_status'?: string;
    private 'operation_type'?: string;
    private 'operation_error'?: ServerOperationError;
    public constructor() { 
        super();
    }
    public withOperationId(operationId: string): GetHyperinstanceOperationResponse {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withOperationStatus(operationStatus: string): GetHyperinstanceOperationResponse {
        this['operation_status'] = operationStatus;
        return this;
    }
    public set operationStatus(operationStatus: string  | undefined) {
        this['operation_status'] = operationStatus;
    }
    public get operationStatus(): string | undefined {
        return this['operation_status'];
    }
    public withOperationType(operationType: string): GetHyperinstanceOperationResponse {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withOperationError(operationError: ServerOperationError): GetHyperinstanceOperationResponse {
        this['operation_error'] = operationError;
        return this;
    }
    public set operationError(operationError: ServerOperationError  | undefined) {
        this['operation_error'] = operationError;
    }
    public get operationError(): ServerOperationError | undefined {
        return this['operation_error'];
    }
}