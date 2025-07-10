

export class ApprovalUserDto {
    public id?: number;
    public username?: string;
    public name?: string;
    private 'nick_name'?: string;
    public state?: string;
    public constructor() { 
    }
    public withId(id: number): ApprovalUserDto {
        this['id'] = id;
        return this;
    }
    public withUsername(username: string): ApprovalUserDto {
        this['username'] = username;
        return this;
    }
    public withName(name: string): ApprovalUserDto {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): ApprovalUserDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withState(state: string): ApprovalUserDto {
        this['state'] = state;
        return this;
    }
}