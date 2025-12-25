
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCodeSegmentResponse extends SdkResponse {
    private 'code_segment_id'?: string;
    private 'delete_time'?: number;
    public constructor() { 
        super();
    }
    public withCodeSegmentId(codeSegmentId: string): DeleteCodeSegmentResponse {
        this['code_segment_id'] = codeSegmentId;
        return this;
    }
    public set codeSegmentId(codeSegmentId: string  | undefined) {
        this['code_segment_id'] = codeSegmentId;
    }
    public get codeSegmentId(): string | undefined {
        return this['code_segment_id'];
    }
    public withDeleteTime(deleteTime: number): DeleteCodeSegmentResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
}