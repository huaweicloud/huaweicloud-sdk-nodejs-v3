

export class PublicIpConfig {
    public id?: string;
    private 'public_ip'?: string;
    public type?: PublicIpConfigTypeEnum | string;
    public constructor(id?: string, publicIp?: string, type?: string) { 
        this['id'] = id;
        this['public_ip'] = publicIp;
        this['type'] = type;
    }
    public withId(id: string): PublicIpConfig {
        this['id'] = id;
        return this;
    }
    public withPublicIp(publicIp: string): PublicIpConfig {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withType(type: PublicIpConfigTypeEnum | string): PublicIpConfig {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicIpConfigTypeEnum {
    MASTER = 'master',
    SLAVE = 'slave'
}
