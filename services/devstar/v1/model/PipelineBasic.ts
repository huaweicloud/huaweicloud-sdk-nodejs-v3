

export class PipelineBasic {
    public uuid?: string;
    public id?: string;
    public name?: string;
    public url?: string;
    private 'last_running_status'?: PipelineBasicLastRunningStatusEnum | string;
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
    public withLastRunningStatus(lastRunningStatus: PipelineBasicLastRunningStatusEnum | string): PipelineBasic {
        this['last_running_status'] = lastRunningStatus;
        return this;
    }
    public set lastRunningStatus(lastRunningStatus: PipelineBasicLastRunningStatusEnum | string  | undefined) {
        this['last_running_status'] = lastRunningStatus;
    }
    public get lastRunningStatus(): PipelineBasicLastRunningStatusEnum | string | undefined {
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
