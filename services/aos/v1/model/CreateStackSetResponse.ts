import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStackSetResponse extends SdkResponse {
    private 'stack_set_id'?: string;
    public constructor() { 
        super();
    }
    public withStackSetId(stackSetId: string): CreateStackSetResponse {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
}