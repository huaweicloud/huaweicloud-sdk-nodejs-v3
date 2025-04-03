

export class LiveExitConfig {
    private 'max_live_duration'?: number;
    private 'auto_stop_mode'?: LiveExitConfigAutoStopModeEnum | string;
    private 'max_exception_waiting_duration'?: number;
    public constructor() { 
    }
    public withMaxLiveDuration(maxLiveDuration: number): LiveExitConfig {
        this['max_live_duration'] = maxLiveDuration;
        return this;
    }
    public set maxLiveDuration(maxLiveDuration: number  | undefined) {
        this['max_live_duration'] = maxLiveDuration;
    }
    public get maxLiveDuration(): number | undefined {
        return this['max_live_duration'];
    }
    public withAutoStopMode(autoStopMode: LiveExitConfigAutoStopModeEnum | string): LiveExitConfig {
        this['auto_stop_mode'] = autoStopMode;
        return this;
    }
    public set autoStopMode(autoStopMode: LiveExitConfigAutoStopModeEnum | string  | undefined) {
        this['auto_stop_mode'] = autoStopMode;
    }
    public get autoStopMode(): LiveExitConfigAutoStopModeEnum | string | undefined {
        return this['auto_stop_mode'];
    }
    public withMaxExceptionWaitingDuration(maxExceptionWaitingDuration: number): LiveExitConfig {
        this['max_exception_waiting_duration'] = maxExceptionWaitingDuration;
        return this;
    }
    public set maxExceptionWaitingDuration(maxExceptionWaitingDuration: number  | undefined) {
        this['max_exception_waiting_duration'] = maxExceptionWaitingDuration;
    }
    public get maxExceptionWaitingDuration(): number | undefined {
        return this['max_exception_waiting_duration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveExitConfigAutoStopModeEnum {
    FORCE_EXIT = 'FORCE_EXIT',
    SEGMENT_END = 'SEGMENT_END',
    SCENE_END = 'SCENE_END',
    SCRIPT_END = 'SCRIPT_END'
}
