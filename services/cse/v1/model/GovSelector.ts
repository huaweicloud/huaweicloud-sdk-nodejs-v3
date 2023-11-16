

export class GovSelector {
    public environment?: string;
    public app?: string;
    public service?: string;
    public constructor() { 
    }
    public withEnvironment(environment: string): GovSelector {
        this['environment'] = environment;
        return this;
    }
    public withApp(app: string): GovSelector {
        this['app'] = app;
        return this;
    }
    public withService(service: string): GovSelector {
        this['service'] = service;
        return this;
    }
}