

export class UpdateDesireds {
    public config?: object;
    public constructor() { 
    }
    public withConfig(config: object): UpdateDesireds {
        this['config'] = config;
        return this;
    }
}