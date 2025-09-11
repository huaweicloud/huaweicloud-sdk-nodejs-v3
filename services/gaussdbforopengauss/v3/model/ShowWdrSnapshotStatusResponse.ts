
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWdrSnapshotStatusResponse extends SdkResponse {
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowWdrSnapshotStatusResponse {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ShowWdrSnapshotStatusResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowWdrSnapshotStatusResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}