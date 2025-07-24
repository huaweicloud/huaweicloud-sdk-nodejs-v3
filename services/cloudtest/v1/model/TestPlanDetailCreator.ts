

export class TestPlanDetailCreator {
    public id?: string;
    private 'nick_name'?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withId(id: string): TestPlanDetailCreator {
        this['id'] = id;
        return this;
    }
    public withNickName(nickName: string): TestPlanDetailCreator {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withUserName(userName: string): TestPlanDetailCreator {
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