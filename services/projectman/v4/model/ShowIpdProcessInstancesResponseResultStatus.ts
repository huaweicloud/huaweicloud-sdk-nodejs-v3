

export class ShowIpdProcessInstancesResponseResultStatus {
    public code?: string;
    public name?: string;
    public constructor() { 
    }
    public withCode(code: string): ShowIpdProcessInstancesResponseResultStatus {
        this['code'] = code;
        return this;
    }
    public withName(name: string): ShowIpdProcessInstancesResponseResultStatus {
        this['name'] = name;
        return this;
    }
}