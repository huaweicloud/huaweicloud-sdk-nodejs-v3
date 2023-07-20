

export class ExecuteRecordV2Body {
    public duration?: string;
    public state?: string;
    public operator?: string;
    private 'execution_id'?: string;
    private 'start_time'?: string;
    public nickname?: string;
    private 'end_time'?: string;
    private 'release_id'?: number;
    public type?: string;
    public constructor() { 
    }
    public withDuration(duration: string): ExecuteRecordV2Body {
        this['duration'] = duration;
        return this;
    }
    public withState(state: string): ExecuteRecordV2Body {
        this['state'] = state;
        return this;
    }
    public withOperator(operator: string): ExecuteRecordV2Body {
        this['operator'] = operator;
        return this;
    }
    public withExecutionId(executionId: string): ExecuteRecordV2Body {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withStartTime(startTime: string): ExecuteRecordV2Body {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withNickname(nickname: string): ExecuteRecordV2Body {
        this['nickname'] = nickname;
        return this;
    }
    public withEndTime(endTime: string): ExecuteRecordV2Body {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withReleaseId(releaseId: number): ExecuteRecordV2Body {
        this['release_id'] = releaseId;
        return this;
    }
    public set releaseId(releaseId: number  | undefined) {
        this['release_id'] = releaseId;
    }
    public get releaseId(): number | undefined {
        return this['release_id'];
    }
    public withType(type: string): ExecuteRecordV2Body {
        this['type'] = type;
        return this;
    }
}