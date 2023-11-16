

export class StartInstanceResizeCheckJobRequestBody {
    private 'new_capacity'?: number;
    private 'spec_code'?: string;
    public constructor() { 
    }
    public withNewCapacity(newCapacity: number): StartInstanceResizeCheckJobRequestBody {
        this['new_capacity'] = newCapacity;
        return this;
    }
    public set newCapacity(newCapacity: number  | undefined) {
        this['new_capacity'] = newCapacity;
    }
    public get newCapacity(): number | undefined {
        return this['new_capacity'];
    }
    public withSpecCode(specCode: string): StartInstanceResizeCheckJobRequestBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}