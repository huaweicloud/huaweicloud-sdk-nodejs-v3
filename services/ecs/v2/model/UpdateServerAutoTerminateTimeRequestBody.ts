

export class UpdateServerAutoTerminateTimeRequestBody {
    private 'auto_terminate_time': string | undefined;
    public constructor(autoTerminateTime?: any) { 
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public withAutoTerminateTime(autoTerminateTime: string): UpdateServerAutoTerminateTimeRequestBody {
        this['auto_terminate_time'] = autoTerminateTime;
        return this;
    }
    public set autoTerminateTime(autoTerminateTime: string | undefined) {
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public get autoTerminateTime() {
        return this['auto_terminate_time'];
    }
}