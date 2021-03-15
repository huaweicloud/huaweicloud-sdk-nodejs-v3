

export class AddApplication {
    private 'app_name': string | undefined;
    private 'app_id'?: string | undefined;
    private 'instance_id'?: string | undefined;
    private 'service_name'?: string | undefined;
    public constructor(appName: any) { 
        this['app_name'] = appName;
    }
    public withAppName(appName: string): AddApplication {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withAppId(appId: string): AddApplication {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withInstanceId(instanceId: string): AddApplication {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withServiceName(serviceName: string): AddApplication {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
}