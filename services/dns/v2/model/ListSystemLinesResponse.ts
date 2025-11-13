import { Metadata } from './Metadata';
import { SystemLine } from './SystemLine';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSystemLinesResponse extends SdkResponse {
    public lines?: Array<SystemLine>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLines(lines: Array<SystemLine>): ListSystemLinesResponse {
        this['lines'] = lines;
        return this;
    }
    public withMetadata(metadata: Metadata): ListSystemLinesResponse {
        this['metadata'] = metadata;
        return this;
    }
}