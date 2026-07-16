

export class JobInputResp {
    public name?: string;
    public type?: JobInputRespTypeEnum | string;
    public data?: object;
    public value?: object;
    public constructor() { 
    }
    public withName(name: string): JobInputResp {
        this['name'] = name;
        return this;
    }
    public withType(type: JobInputRespTypeEnum | string): JobInputResp {
        this['type'] = type;
        return this;
    }
    public withData(data: object): JobInputResp {
        this['data'] = data;
        return this;
    }
    public withValue(value: object): JobInputResp {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobInputRespTypeEnum {
    DATASET = 'dataset：数据集。',
    OBSOBS = 'obs：OBS文件。'
}
