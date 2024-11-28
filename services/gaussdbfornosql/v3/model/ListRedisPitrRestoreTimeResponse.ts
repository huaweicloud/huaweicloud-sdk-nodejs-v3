
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRedisPitrRestoreTimeResponse extends SdkResponse {
    private 'restore_time'?: Array<string>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withRestoreTime(restoreTime: Array<string>): ListRedisPitrRestoreTimeResponse {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: Array<string>  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): Array<string> | undefined {
        return this['restore_time'];
    }
    public withTotalCount(totalCount: number): ListRedisPitrRestoreTimeResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}