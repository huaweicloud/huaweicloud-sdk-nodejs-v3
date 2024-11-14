

export class ModifyInstanceOpsWindowV3Req {
    private 'start_time'?: string;
    public constructor(startTime?: string) { 
        this['start_time'] = startTime;
    }
    public withStartTime(startTime: string): ModifyInstanceOpsWindowV3Req {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}