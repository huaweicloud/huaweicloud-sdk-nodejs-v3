

export class SaveTaskSettingRequestBody {
    private 'max_running_time'?: number;
    private 'is_long_run'?: SaveTaskSettingRequestBodyIsLongRunEnum | string;
    public constructor() { 
    }
    public withMaxRunningTime(maxRunningTime: number): SaveTaskSettingRequestBody {
        this['max_running_time'] = maxRunningTime;
        return this;
    }
    public set maxRunningTime(maxRunningTime: number  | undefined) {
        this['max_running_time'] = maxRunningTime;
    }
    public get maxRunningTime(): number | undefined {
        return this['max_running_time'];
    }
    public withIsLongRun(isLongRun: SaveTaskSettingRequestBodyIsLongRunEnum | string): SaveTaskSettingRequestBody {
        this['is_long_run'] = isLongRun;
        return this;
    }
    public set isLongRun(isLongRun: SaveTaskSettingRequestBodyIsLongRunEnum | string  | undefined) {
        this['is_long_run'] = isLongRun;
    }
    public get isLongRun(): SaveTaskSettingRequestBodyIsLongRunEnum | string | undefined {
        return this['is_long_run'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SaveTaskSettingRequestBodyIsLongRunEnum {
    E_1 = '1',
    E_0 = '0'
}
