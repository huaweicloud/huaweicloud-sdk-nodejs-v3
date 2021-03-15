

export class ShowApplicationsRequest {
    private 'Instance-Id'?: string | undefined;
    private 'default_app'?: boolean | undefined;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ShowApplicationsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withDefaultApp(defaultApp: boolean): ShowApplicationsRequest {
        this['default_app'] = defaultApp;
        return this;
    }
    public set defaultApp(defaultApp: boolean | undefined) {
        this['default_app'] = defaultApp;
    }
    public get defaultApp() {
        return this['default_app'];
    }
}