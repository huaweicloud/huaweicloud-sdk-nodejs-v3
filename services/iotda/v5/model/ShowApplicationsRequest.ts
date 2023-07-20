

export class ShowApplicationsRequest {
    private 'Instance-Id'?: string;
    private 'default_app'?: boolean;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ShowApplicationsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withDefaultApp(defaultApp: boolean): ShowApplicationsRequest {
        this['default_app'] = defaultApp;
        return this;
    }
    public set defaultApp(defaultApp: boolean  | undefined) {
        this['default_app'] = defaultApp;
    }
    public get defaultApp(): boolean | undefined {
        return this['default_app'];
    }
}