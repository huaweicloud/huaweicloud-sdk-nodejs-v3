import { PrivateModuleIdPrimitiveTypeHolder } from './PrivateModuleIdPrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePrivateModuleResponse extends SdkResponse {
    private 'module_id'?: string;
    public constructor() { 
        super();
    }
    public withModuleId(moduleId: string): CreatePrivateModuleResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
}