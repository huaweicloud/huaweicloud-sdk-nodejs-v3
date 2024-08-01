
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCursorTimeResponse extends SdkResponse {
    private 'cursor_time'?: number;
    public constructor() { 
        super();
    }
    public withCursorTime(cursorTime: number): ShowCursorTimeResponse {
        this['cursor_time'] = cursorTime;
        return this;
    }
    public set cursorTime(cursorTime: number  | undefined) {
        this['cursor_time'] = cursorTime;
    }
    public get cursorTime(): number | undefined {
        return this['cursor_time'];
    }
}