

export class CreateInstanceFlavorResult {
    public num?: string;
    public storage?: string;
    public size?: string;
    private 'spec_code'?: string;
    public constructor() { 
    }
    public withNum(num: string): CreateInstanceFlavorResult {
        this['num'] = num;
        return this;
    }
    public withStorage(storage: string): CreateInstanceFlavorResult {
        this['storage'] = storage;
        return this;
    }
    public withSize(size: string): CreateInstanceFlavorResult {
        this['size'] = size;
        return this;
    }
    public withSpecCode(specCode: string): CreateInstanceFlavorResult {
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