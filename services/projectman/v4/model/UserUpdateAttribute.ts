

export class UserUpdateAttribute {
    public id?: string;
    public name?: string;
    private 'nick_name'?: string;
    public constructor() { 
    }
    public withId(id: string): UserUpdateAttribute {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UserUpdateAttribute {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): UserUpdateAttribute {
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