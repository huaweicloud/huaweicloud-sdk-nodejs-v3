

export class SSHKeyDto {
    public id?: number;
    public title?: string;
    public key?: string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withId(id: number): SSHKeyDto {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): SSHKeyDto {
        this['title'] = title;
        return this;
    }
    public withKey(key: string): SSHKeyDto {
        this['key'] = key;
        return this;
    }
    public withCreatedAt(createdAt: string): SSHKeyDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}