

export class Author {
    public id?: number;
    public name?: string;
    public state?: string;
    public username?: string;
    private 'name_cn'?: string;
    private 'avatar_url'?: string;
    public email?: string;
    public constructor() { 
    }
    public withId(id: number): Author {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Author {
        this['name'] = name;
        return this;
    }
    public withState(state: string): Author {
        this['state'] = state;
        return this;
    }
    public withUsername(username: string): Author {
        this['username'] = username;
        return this;
    }
    public withNameCn(nameCn: string): Author {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withAvatarUrl(avatarUrl: string): Author {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withEmail(email: string): Author {
        this['email'] = email;
        return this;
    }
}