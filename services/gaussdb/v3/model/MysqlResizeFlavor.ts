

export class MysqlResizeFlavor {
    private 'spec_code'?: string;
    public constructor(specCode?: string) { 
        this['spec_code'] = specCode;
    }
    public withSpecCode(specCode: string): MysqlResizeFlavor {
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