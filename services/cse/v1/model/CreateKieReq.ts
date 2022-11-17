

export class CreateKieReq {
    public key?: string;
    public labels?: object;
    public value?: string;
    private 'value_type'?: string | undefined;
    public status?: string;
    public constructor() { 
    }
    public withKey(key: string): CreateKieReq {
        this['key'] = key;
        return this;
    }
    public withLabels(labels: object): CreateKieReq {
        this['labels'] = labels;
        return this;
    }
    public withValue(value: string): CreateKieReq {
        this['value'] = value;
        return this;
    }
    public withValueType(valueType: string): CreateKieReq {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType() {
        return this['value_type'];
    }
    public withStatus(status: string): CreateKieReq {
        this['status'] = status;
        return this;
    }
}