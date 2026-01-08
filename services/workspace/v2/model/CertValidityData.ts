

export class CertValidityData {
    public type?: CertValidityDataTypeEnum | string;
    public value?: number;
    private 'start_from'?: string;
    public constructor(type?: string, value?: number) { 
        this['type'] = type;
        this['value'] = value;
    }
    public withType(type: CertValidityDataTypeEnum | string): CertValidityData {
        this['type'] = type;
        return this;
    }
    public withValue(value: number): CertValidityData {
        this['value'] = value;
        return this;
    }
    public withStartFrom(startFrom: string): CertValidityData {
        this['start_from'] = startFrom;
        return this;
    }
    public set startFrom(startFrom: string  | undefined) {
        this['start_from'] = startFrom;
    }
    public get startFrom(): string | undefined {
        return this['start_from'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CertValidityDataTypeEnum {
    YEAR = 'YEAR'
}
