import { PrivateHookIdPrimitiveTypeHolder } from './PrivateHookIdPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePrivateHookResponse extends SdkResponse {
    private 'hook_id'?: string;
    public constructor() { 
        super();
    }
    public withHookId(hookId: string): CreatePrivateHookResponse {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
}