

export class JobInput {
    public name?: string;
    public type?: JobInputTypeEnum | string;
    public data?: object;
    public value?: object;
    public constructor() { 
    }
    public withName(name: string): JobInput {
        this['name'] = name;
        return this;
    }
    public withType(type: JobInputTypeEnum | string): JobInput {
        this['type'] = type;
        return this;
    }
    public withData(data: object): JobInput {
        this['data'] = data;
        return this;
    }
    public withValue(value: object): JobInput {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobInputTypeEnum {
    DATASET = 'dataset：数据集。',
    OBSOBS = 'obs：OBS文件。'
}
