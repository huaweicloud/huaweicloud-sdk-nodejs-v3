

export class ApplicationDTO {
    private 'app_id'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'default_app'?: boolean | undefined;
    private 'app_type'?: string | undefined;
    public username?: string;
    public permission?: string;
    private 'last_instance_id'?: string | undefined;
    private 'current_instance_id'?: string | undefined;
    private 'service_name'?: string | undefined;
    public freezed?: boolean;
    public constructor() { 
    }
    public withAppId(appId: string): ApplicationDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withAppName(appName: string): ApplicationDTO {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withCreateTime(createTime: string): ApplicationDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withDefaultApp(defaultApp: boolean): ApplicationDTO {
        this['default_app'] = defaultApp;
        return this;
    }
    public set defaultApp(defaultApp: boolean | undefined) {
        this['default_app'] = defaultApp;
    }
    public get defaultApp() {
        return this['default_app'];
    }
    public withAppType(appType: string): ApplicationDTO {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string | undefined) {
        this['app_type'] = appType;
    }
    public get appType() {
        return this['app_type'];
    }
    public withUsername(username: string): ApplicationDTO {
        this['username'] = username;
        return this;
    }
    public withPermission(permission: string): ApplicationDTO {
        this['permission'] = permission;
        return this;
    }
    public withLastInstanceId(lastInstanceId: string): ApplicationDTO {
        this['last_instance_id'] = lastInstanceId;
        return this;
    }
    public set lastInstanceId(lastInstanceId: string | undefined) {
        this['last_instance_id'] = lastInstanceId;
    }
    public get lastInstanceId() {
        return this['last_instance_id'];
    }
    public withCurrentInstanceId(currentInstanceId: string): ApplicationDTO {
        this['current_instance_id'] = currentInstanceId;
        return this;
    }
    public set currentInstanceId(currentInstanceId: string | undefined) {
        this['current_instance_id'] = currentInstanceId;
    }
    public get currentInstanceId() {
        return this['current_instance_id'];
    }
    public withServiceName(serviceName: string): ApplicationDTO {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withFreezed(freezed: boolean): ApplicationDTO {
        this['freezed'] = freezed;
        return this;
    }
}