

export class PipelineDeleteStatus {
    public name?: string;
    public status?: PipelineDeleteStatusStatusEnum;
    public constructor() { 
    }
    public withName(name: string): PipelineDeleteStatus {
        this['name'] = name;
        return this;
    }
    public withStatus(status: PipelineDeleteStatusStatusEnum): PipelineDeleteStatus {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PipelineDeleteStatusStatusEnum {
    DELETED = 'deleted',
    FAILED = 'failed',
    GOING = 'going'
}
