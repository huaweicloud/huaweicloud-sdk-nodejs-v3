

export class AllowedBandwidthTypes {
    public type?: string;
    private 'cn_name'?: string;
    private 'en_name'?: string;
    public constructor() { 
    }
    public withType(type: string): AllowedBandwidthTypes {
        this['type'] = type;
        return this;
    }
    public withCnName(cnName: string): AllowedBandwidthTypes {
        this['cn_name'] = cnName;
        return this;
    }
    public set cnName(cnName: string  | undefined) {
        this['cn_name'] = cnName;
    }
    public get cnName(): string | undefined {
        return this['cn_name'];
    }
    public withEnName(enName: string): AllowedBandwidthTypes {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
}