

export class StackSetOperationUpdateTimePrimitiveTypeHolder {
    private 'update_time'?: string;
    public constructor() { 
    }
    public withUpdateTime(updateTime: string): StackSetOperationUpdateTimePrimitiveTypeHolder {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}