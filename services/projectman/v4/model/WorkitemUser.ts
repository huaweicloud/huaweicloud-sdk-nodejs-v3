

export class WorkitemUser {
    public id?: string;
    public name?: string;
    private 'nick_name'?: string;
    public constructor() { 
    }
    public withId(id: string): WorkitemUser {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkitemUser {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): WorkitemUser {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
}