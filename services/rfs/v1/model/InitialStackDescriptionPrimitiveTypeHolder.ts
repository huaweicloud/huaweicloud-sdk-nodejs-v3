

export class InitialStackDescriptionPrimitiveTypeHolder {
    private 'initial_stack_description'?: string;
    public constructor() { 
    }
    public withInitialStackDescription(initialStackDescription: string): InitialStackDescriptionPrimitiveTypeHolder {
        this['initial_stack_description'] = initialStackDescription;
        return this;
    }
    public set initialStackDescription(initialStackDescription: string  | undefined) {
        this['initial_stack_description'] = initialStackDescription;
    }
    public get initialStackDescription(): string | undefined {
        return this['initial_stack_description'];
    }
}