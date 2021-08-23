

export class GetFunctionListRequest {
    public package?: string;
    public constructor() {}
    public withPackage(pkg?: string): GetFunctionListRequest {
        this['package'] = pkg;
        return this;
    }
}
