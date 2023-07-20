

export class PauseInfo {
    private 'job_id'?: string;
    private 'pause_mode'?: PauseInfoPauseModeEnum | string;
    public constructor(jobId?: string, pauseMode?: string) { 
        this['job_id'] = jobId;
        this['pause_mode'] = pauseMode;
    }
    public withJobId(jobId: string): PauseInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withPauseMode(pauseMode: PauseInfoPauseModeEnum | string): PauseInfo {
        this['pause_mode'] = pauseMode;
        return this;
    }
    public set pauseMode(pauseMode: PauseInfoPauseModeEnum | string  | undefined) {
        this['pause_mode'] = pauseMode;
    }
    public get pauseMode(): PauseInfoPauseModeEnum | string | undefined {
        return this['pause_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PauseInfoPauseModeEnum {
    TARGET = 'target',
    ALL = 'all'
}
