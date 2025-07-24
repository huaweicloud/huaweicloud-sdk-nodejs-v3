

export class TestPlanDetailOwner {
    public id?: string;
    public name?: string;
    private 'nick_name'?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withId(id: string): TestPlanDetailOwner {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TestPlanDetailOwner {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): TestPlanDetailOwner {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withUserName(userName: string): TestPlanDetailOwner {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}