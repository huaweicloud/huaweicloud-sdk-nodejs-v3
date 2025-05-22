import { GrowCheckResult } from './GrowCheckResult';
import { NoteInfo } from './NoteInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckGrowClusterResponse extends SdkResponse {
    public data?: Array<GrowCheckResult>;
    public note?: NoteInfo;
    public constructor() { 
        super();
    }
    public withData(data: Array<GrowCheckResult>): CheckGrowClusterResponse {
        this['data'] = data;
        return this;
    }
    public withNote(note: NoteInfo): CheckGrowClusterResponse {
        this['note'] = note;
        return this;
    }
}