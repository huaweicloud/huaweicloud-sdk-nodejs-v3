

export class PipelineBasic {
    public uuid?: string;
    public id?: string;
    public name?: string;
    public url?: string;
    private 'last_running_status'?: PipelineBasicLastRunningStatusEnum | undefined;
    public constructor() { 
    }
    public withUuid(uuid: string): PipelineBasic {
        this['uuid'] = uuid;
        return this;
    }
    public withId(id: string): PipelineBasic {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PipelineBasic {
        this['name'] = name;
        return this;
    }
    public withUrl(url: string): PipelineBasic {
        this['url'] = url;
        return this;
    }
    public withLastRunningStatus(lastRunningStatus: PipelineBasicLastRunningStatusEnum): PipelineBasic {
        this['last_running_status'] = lastRunningStatus;
        return this;
    }
    public set lastRunningStatus(lastRunningStatus: PipelineBasicLastRunningStatusEnum | undefined) {
        this['last_running_status'] = lastRunningStatus;
    }
    public get lastRunningStatus() {
        return this['last_running_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PipelineBasicLastRunningStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed',
    RUNNING = 'running'
}
