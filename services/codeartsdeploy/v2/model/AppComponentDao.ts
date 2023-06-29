

export class AppComponentDao {
    private 'task_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'comp_id'?: string | undefined;
    private 'comp_name'?: string | undefined;
    private 'domain_id'?: string | undefined;
    public region?: string;
    public state?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): AppComponentDao {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withAppId(appId: string): AppComponentDao {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withAppName(appName: string): AppComponentDao {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withCompId(compId: string): AppComponentDao {
        this['comp_id'] = compId;
        return this;
    }
    public set compId(compId: string | undefined) {
        this['comp_id'] = compId;
    }
    public get compId() {
        return this['comp_id'];
    }
    public withCompName(compName: string): AppComponentDao {
        this['comp_name'] = compName;
        return this;
    }
    public set compName(compName: string | undefined) {
        this['comp_name'] = compName;
    }
    public get compName() {
        return this['comp_name'];
    }
    public withDomainId(domainId: string): AppComponentDao {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withRegion(region: string): AppComponentDao {
        this['region'] = region;
        return this;
    }
    public withState(state: string): AppComponentDao {
        this['state'] = state;
        return this;
    }
}