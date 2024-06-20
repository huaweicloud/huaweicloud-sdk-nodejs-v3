

export class ParameterRef {
    public ref?: string;
    public constructor(ref?: string) { 
        this['ref'] = ref;
    }
    public withRef(ref: string): ParameterRef {
        this['ref'] = ref;
        return this;
    }
}