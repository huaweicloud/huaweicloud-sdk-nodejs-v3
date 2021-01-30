import { MappingResult } from './MappingResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateMappingResponse extends SdkResponse {
    public mapping?: MappingResult;
    public constructor() { 
        super();
    }
    public withMapping(mapping: MappingResult): KeystoneCreateMappingResponse {
        this['mapping'] = mapping;
        return this;
    }
}