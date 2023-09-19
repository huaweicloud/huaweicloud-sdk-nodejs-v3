

export class ManagementEventSelector {
    private 'exclude_service'?: Array<string>;
    public constructor() { 
    }
    public withExcludeService(excludeService: Array<string>): ManagementEventSelector {
        this['exclude_service'] = excludeService;
        return this;
    }
    public set excludeService(excludeService: Array<string>  | undefined) {
        this['exclude_service'] = excludeService;
    }
    public get excludeService(): Array<string> | undefined {
        return this['exclude_service'];
    }
}