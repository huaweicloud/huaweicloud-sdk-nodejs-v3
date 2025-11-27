

export class StackDescriptionPrimitiveTypeHolder {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): StackDescriptionPrimitiveTypeHolder {
        this['description'] = description;
        return this;
    }
}