

export class PauseInfo {
    private 'job_id': string | undefined;
    private 'pause_mode': PauseInfoPauseModeEnum | undefined;
    public constructor(jobId?: any, pauseMode?: any) { 
        this['job_id'] = jobId;
        this['pause_mode'] = pauseMode;
    }
    public withJobId(jobId: string): PauseInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withPauseMode(pauseMode: PauseInfoPauseModeEnum): PauseInfo {
        this['pause_mode'] = pauseMode;
        return this;
    }
    public set pauseMode(pauseMode: PauseInfoPauseModeEnum | undefined) {
        this['pause_mode'] = pauseMode;
    }
    public get pauseMode() {
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
