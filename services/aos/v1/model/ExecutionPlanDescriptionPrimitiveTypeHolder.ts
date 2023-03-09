

export class ExecutionPlanDescriptionPrimitiveTypeHolder {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): ExecutionPlanDescriptionPrimitiveTypeHolder {
        this['description'] = description;
        return this;
    }
}