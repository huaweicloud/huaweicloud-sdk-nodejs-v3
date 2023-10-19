

export class PublicIp {
    public id?: string;
    private 'public_eip'?: string;
    public constructor() { 
    }
    public withId(id: string): PublicIp {
        this['id'] = id;
        return this;
    }
    public withPublicEip(publicEip: string): PublicIp {
        this['public_eip'] = publicEip;
        return this;
    }
    public set publicEip(publicEip: string  | undefined) {
        this['public_eip'] = publicEip;
    }
    public get publicEip(): string | undefined {
        return this['public_eip'];
    }
}