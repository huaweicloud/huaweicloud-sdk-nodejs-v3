

export class AccessControlTask {
    public id?: string;
    public urls?: Array<string>;
    public status?: string;
    public action?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withId(id: string): AccessControlTask {
        this['id'] = id;
        return this;
    }
    public withUrls(urls: Array<string>): AccessControlTask {
        this['urls'] = urls;
        return this;
    }
    public withStatus(status: string): AccessControlTask {
        this['status'] = status;
        return this;
    }
    public withAction(action: string): AccessControlTask {
        this['action'] = action;
        return this;
    }
    public withCreateTime(createTime: number): AccessControlTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}