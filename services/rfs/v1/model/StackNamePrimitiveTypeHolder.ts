

export class StackNamePrimitiveTypeHolder {
    private 'stack_name'?: string;
    public constructor(stackName?: string) { 
        this['stack_name'] = stackName;
    }
    public withStackName(stackName: string): StackNamePrimitiveTypeHolder {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
}