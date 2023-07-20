

export class UpdateServerAutoTerminateTimeRequestBody {
    private 'auto_terminate_time'?: string;
    public constructor(autoTerminateTime?: string) { 
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public withAutoTerminateTime(autoTerminateTime: string): UpdateServerAutoTerminateTimeRequestBody {
        this['auto_terminate_time'] = autoTerminateTime;
        return this;
    }
    public set autoTerminateTime(autoTerminateTime: string  | undefined) {
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public get autoTerminateTime(): string | undefined {
        return this['auto_terminate_time'];
    }
}