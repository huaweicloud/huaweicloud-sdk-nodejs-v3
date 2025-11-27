import { StackSetOperationIdPrimitiveTypeHolder } from './StackSetOperationIdPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteStackInstanceDeprecatedResponse extends SdkResponse {
    private 'stack_set_operation_id'?: string;
    public constructor() { 
        super();
    }
    public withStackSetOperationId(stackSetOperationId: string): DeleteStackInstanceDeprecatedResponse {
        this['stack_set_operation_id'] = stackSetOperationId;
        return this;
    }
    public set stackSetOperationId(stackSetOperationId: string  | undefined) {
        this['stack_set_operation_id'] = stackSetOperationId;
    }
    public get stackSetOperationId(): string | undefined {
        return this['stack_set_operation_id'];
    }
}