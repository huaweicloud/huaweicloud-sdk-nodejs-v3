import { MappingResult } from './MappingResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneUpdateMappingResponse extends SdkResponse {
    public mapping?: MappingResult;
    public constructor() { 
        super();
    }
    public withMapping(mapping: MappingResult): KeystoneUpdateMappingResponse {
        this['mapping'] = mapping;
        return this;
    }
}