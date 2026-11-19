

export class DecServiceFlavorItemDetail {
    private 'type_code'?: string;
    public code?: string;
    public constructor() { 
    }
    public withTypeCode(typeCode: string): DecServiceFlavorItemDetail {
        this['type_code'] = typeCode;
        return this;
    }
    public set typeCode(typeCode: string  | undefined) {
        this['type_code'] = typeCode;
    }
    public get typeCode(): string | undefined {
        return this['type_code'];
    }
    public withCode(code: string): DecServiceFlavorItemDetail {
        this['code'] = code;
        return this;
    }
}