

export class ProcessInstanceResponseResultStatus {
    public code?: string;
    public name?: string;
    public constructor() { 
    }
    public withCode(code: string): ProcessInstanceResponseResultStatus {
        this['code'] = code;
        return this;
    }
    public withName(name: string): ProcessInstanceResponseResultStatus {
        this['name'] = name;
        return this;
    }
}