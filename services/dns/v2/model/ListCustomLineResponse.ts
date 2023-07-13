import { Line } from './Line';
import { Metadata } from './Metadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomLineResponse extends SdkResponse {
    public lines?: Array<Line>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withLines(lines: Array<Line>): ListCustomLineResponse {
        this['lines'] = lines;
        return this;
    }
    public withMetadata(metadata: Metadata): ListCustomLineResponse {
        this['metadata'] = metadata;
        return this;
    }
}