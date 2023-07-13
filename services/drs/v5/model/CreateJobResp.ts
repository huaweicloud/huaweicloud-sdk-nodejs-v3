

export class CreateJobResp {
    public id: string;
    public name: string;
    public status: string;
    private 'create_time': string | undefined;
    public constructor(id?: any, name?: any, status?: any, createTime?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['create_time'] = createTime;
    }
    public withId(id: string): CreateJobResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateJobResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateJobResp {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CreateJobResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}