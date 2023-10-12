

export class StackSetDescriptionPrimitiveTypeHolder {
    private 'stack_set_description'?: string;
    public constructor() { 
    }
    public withStackSetDescription(stackSetDescription: string): StackSetDescriptionPrimitiveTypeHolder {
        this['stack_set_description'] = stackSetDescription;
        return this;
    }
    public set stackSetDescription(stackSetDescription: string  | undefined) {
        this['stack_set_description'] = stackSetDescription;
    }
    public get stackSetDescription(): string | undefined {
        return this['stack_set_description'];
    }
}