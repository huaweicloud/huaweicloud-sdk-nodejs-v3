

export class AlarmTemplateInfo {
    public createTime?: string;
    public createUser?: string;
    public id?: string;
    public remarks?: string;
    public testServiceId?: string;
    public updateTime?: string;
    public updateUser?: string;
    public name?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): AlarmTemplateInfo {
        this['createTime'] = createTime;
        return this;
    }
    public withCreateUser(createUser: string): AlarmTemplateInfo {
        this['createUser'] = createUser;
        return this;
    }
    public withId(id: string): AlarmTemplateInfo {
        this['id'] = id;
        return this;
    }
    public withRemarks(remarks: string): AlarmTemplateInfo {
        this['remarks'] = remarks;
        return this;
    }
    public withTestServiceId(testServiceId: string): AlarmTemplateInfo {
        this['testServiceId'] = testServiceId;
        return this;
    }
    public withUpdateTime(updateTime: string): AlarmTemplateInfo {
        this['updateTime'] = updateTime;
        return this;
    }
    public withUpdateUser(updateUser: string): AlarmTemplateInfo {
        this['updateUser'] = updateUser;
        return this;
    }
    public withName(name: string): AlarmTemplateInfo {
        this['name'] = name;
        return this;
    }
}