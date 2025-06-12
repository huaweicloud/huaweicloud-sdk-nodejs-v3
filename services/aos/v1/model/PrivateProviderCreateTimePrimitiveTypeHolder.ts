

export class PrivateProviderCreateTimePrimitiveTypeHolder {
    private 'create_time'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): PrivateProviderCreateTimePrimitiveTypeHolder {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}