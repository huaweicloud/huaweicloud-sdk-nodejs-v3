

export class StackSetOperationCreateTimePrimitiveTypeHolder {
    private 'create_time'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): StackSetOperationCreateTimePrimitiveTypeHolder {
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