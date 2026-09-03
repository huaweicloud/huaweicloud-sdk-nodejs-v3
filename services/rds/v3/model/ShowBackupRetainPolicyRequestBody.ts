

export class ShowBackupRetainPolicyRequestBody {
    public instanceids?: Array<string>;
    public offset?: number;
    public limit?: number;
    private 'instance_status'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withInstanceids(instanceids: Array<string>): ShowBackupRetainPolicyRequestBody {
        this['instanceids'] = instanceids;
        return this;
    }
    public withOffset(offset: number): ShowBackupRetainPolicyRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowBackupRetainPolicyRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withInstanceStatus(instanceStatus: string): ShowBackupRetainPolicyRequestBody {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withBeginTime(beginTime: string): ShowBackupRetainPolicyRequestBody {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowBackupRetainPolicyRequestBody {
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