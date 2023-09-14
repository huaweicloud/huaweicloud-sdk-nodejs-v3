

export class Stages {
    public result?: string;
    public status?: string;
    public name?: string;
    public parameters?: object;
    public order?: number;
    private 'dsl_method'?: string;
    private 'display_name'?: string;
    public constructor(result?: string, status?: string, name?: string, parameters?: object, order?: number, dslMethod?: string, displayName?: string) { 
        this['result'] = result;
        this['status'] = status;
        this['name'] = name;
        this['parameters'] = parameters;
        this['order'] = order;
        this['dsl_method'] = dslMethod;
        this['display_name'] = displayName;
    }
    public withResult(result: string): Stages {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): Stages {
        this['status'] = status;
        return this;
    }
    public withName(name: string): Stages {
        this['name'] = name;
        return this;
    }
    public withParameters(parameters: object): Stages {
        this['parameters'] = parameters;
        return this;
    }
    public withOrder(order: number): Stages {
        this['order'] = order;
        return this;
    }
    public withDslMethod(dslMethod: string): Stages {
        this['dsl_method'] = dslMethod;
        return this;
    }
    public set dslMethod(dslMethod: string  | undefined) {
        this['dsl_method'] = dslMethod;
    }
    public get dslMethod(): string | undefined {
        return this['dsl_method'];
    }
    public withDisplayName(displayName: string): Stages {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}