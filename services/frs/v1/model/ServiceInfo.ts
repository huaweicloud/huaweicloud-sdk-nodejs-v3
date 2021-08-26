

export class ServiceInfo {
    private 'create_time': string | undefined;
    private 'subscribe_status': boolean | undefined;
    public constructor(createTime?: any, subscribeStatus?: any) { 
        this['create_time'] = createTime;
        this['subscribe_status'] = subscribeStatus;
    }
    public withCreateTime(createTime: string): ServiceInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withSubscribeStatus(subscribeStatus: boolean): ServiceInfo {
        this['subscribe_status'] = subscribeStatus;
        return this;
    }
    public set subscribeStatus(subscribeStatus: boolean | undefined) {
        this['subscribe_status'] = subscribeStatus;
    }
    public get subscribeStatus() {
        return this['subscribe_status'];
    }
}