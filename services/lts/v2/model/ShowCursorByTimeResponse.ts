
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCursorByTimeResponse extends SdkResponse {
    public cursor?: number;
    public constructor() { 
        super();
    }
    public withCursor(cursor: number): ShowCursorByTimeResponse {
        this['cursor'] = cursor;
        return this;
    }
}