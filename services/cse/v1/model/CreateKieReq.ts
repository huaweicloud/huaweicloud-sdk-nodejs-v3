

export class CreateKieReq {
    public id?: string;
    public key?: string;
    public labels?: object;
    public value?: string;
    private 'value_type'?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): CreateKieReq {
        this['id'] = id;
        return this;
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
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
    public withStatus(status: string): CreateKieReq {
        this['status'] = status;
        return this;
    }
}