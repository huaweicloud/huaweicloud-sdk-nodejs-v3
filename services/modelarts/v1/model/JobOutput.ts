

export class JobOutput {
    public name?: string;
    public type?: JobOutputTypeEnum | string;
    public config?: { [key: string]: object; };
    public constructor() { 
    }
    public withName(name: string): JobOutput {
        this['name'] = name;
        return this;
    }
    public withType(type: JobOutputTypeEnum | string): JobOutput {
        this['type'] = type;
        return this;
    }
    public withConfig(config: { [key: string]: object; }): JobOutput {
        this['config'] = config;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobOutputTypeEnum {
    DATASET = 'dataset：数据集。',
    OBSOBS = 'obs：OBS文件'
}
