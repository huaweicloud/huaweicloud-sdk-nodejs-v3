

export class StackSetStackNamePrimitiveTypeHolder {
    private 'stack_name'?: string;
    public constructor() { 
    }
    public withStackName(stackName: string): StackSetStackNamePrimitiveTypeHolder {
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