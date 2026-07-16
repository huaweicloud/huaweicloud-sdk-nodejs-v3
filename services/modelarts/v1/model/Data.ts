

export class Data {
    public name?: string;
    public type?: DataTypeEnum | string;
    public value?: { [key: string]: object; };
    private 'used_steps'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): Data {
        this['name'] = name;
        return this;
    }
    public withType(type: DataTypeEnum | string): Data {
        this['type'] = type;
        return this;
    }
    public withValue(value: { [key: string]: object; }): Data {
        this['value'] = value;
        return this;
    }
    public withUsedSteps(usedSteps: Array<string>): Data {
        this['used_steps'] = usedSteps;
        return this;
    }
    public set usedSteps(usedSteps: Array<string>  | undefined) {
        this['used_steps'] = usedSteps;
    }
    public get usedSteps(): Array<string> | undefined {
        return this['used_steps'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataTypeEnum {
    DATASET = 'dataset：数据集。',
    OBSOBS = 'obs：OBS文件。'
}
