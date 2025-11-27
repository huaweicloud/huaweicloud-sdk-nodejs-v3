

export class StackSetNamePrimitiveTypeHolder {
    private 'stack_set_name'?: string;
    public constructor(stackSetName?: string) { 
        this['stack_set_name'] = stackSetName;
    }
    public withStackSetName(stackSetName: string): StackSetNamePrimitiveTypeHolder {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
}