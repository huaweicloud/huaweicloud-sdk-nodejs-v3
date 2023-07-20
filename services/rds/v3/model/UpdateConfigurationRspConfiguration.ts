

export class UpdateConfigurationRspConfiguration {
    public id?: string;
    public name?: string;
    private 'ignored_params'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): UpdateConfigurationRspConfiguration {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateConfigurationRspConfiguration {
        this['name'] = name;
        return this;
    }
    public withIgnoredParams(ignoredParams: Array<string>): UpdateConfigurationRspConfiguration {
        this['ignored_params'] = ignoredParams;
        return this;
    }
    public set ignoredParams(ignoredParams: Array<string>  | undefined) {
        this['ignored_params'] = ignoredParams;
    }
    public get ignoredParams(): Array<string> | undefined {
        return this['ignored_params'];
    }
}