

export class JobOutputResp {
    public name?: string;
    public type?: JobOutputRespTypeEnum | string;
    public config?: { [key: string]: object; };
    public constructor() { 
    }
    public withName(name: string): JobOutputResp {
        this['name'] = name;
        return this;
    }
    public withType(type: JobOutputRespTypeEnum | string): JobOutputResp {
        this['type'] = type;
        return this;
    }
    public withConfig(config: { [key: string]: object; }): JobOutputResp {
        this['config'] = config;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobOutputRespTypeEnum {
    DATASET = 'dataset：数据集。',
    OBSOBS = 'obs：OBS文件'
}
