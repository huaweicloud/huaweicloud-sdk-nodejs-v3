

export class PublicKey {
    public id?: string;
    public key?: string;
    public title?: string;
    public constructor(id?: string, key?: string, title?: string) { 
        this['id'] = id;
        this['key'] = key;
        this['title'] = title;
    }
    public withId(id: string): PublicKey {
        this['id'] = id;
        return this;
    }
    public withKey(key: string): PublicKey {
        this['key'] = key;
        return this;
    }
    public withTitle(title: string): PublicKey {
        this['title'] = title;
        return this;
    }
}