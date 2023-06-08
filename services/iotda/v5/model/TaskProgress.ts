

export class TaskProgress {
    public total?: number;
    public processing?: number;
    public success?: number;
    public fail?: number;
    public waitting?: number;
    private 'fail_wait_retry'?: number | undefined;
    public stopped?: number;
    public removed?: number;
    public constructor() { 
    }
    public withTotal(total: number): TaskProgress {
        this['total'] = total;
        return this;
    }
    public withProcessing(processing: number): TaskProgress {
        this['processing'] = processing;
        return this;
    }
    public withSuccess(success: number): TaskProgress {
        this['success'] = success;
        return this;
    }
    public withFail(fail: number): TaskProgress {
        this['fail'] = fail;
        return this;
    }
    public withWaitting(waitting: number): TaskProgress {
        this['waitting'] = waitting;
        return this;
    }
    public withFailWaitRetry(failWaitRetry: number): TaskProgress {
        this['fail_wait_retry'] = failWaitRetry;
        return this;
    }
    public set failWaitRetry(failWaitRetry: number | undefined) {
        this['fail_wait_retry'] = failWaitRetry;
    }
    public get failWaitRetry() {
        return this['fail_wait_retry'];
    }
    public withStopped(stopped: number): TaskProgress {
        this['stopped'] = stopped;
        return this;
    }
    public withRemoved(removed: number): TaskProgress {
        this['removed'] = removed;
        return this;
    }
}