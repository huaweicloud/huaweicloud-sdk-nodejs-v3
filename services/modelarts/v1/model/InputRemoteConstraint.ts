

export class InputRemoteConstraint {
    private 'data_type'?: string;
    public attributes?: string;
    public constructor() { 
    }
    public withDataType(dataType: string): InputRemoteConstraint {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withAttributes(attributes: string): InputRemoteConstraint {
        this['attributes'] = attributes;
        return this;
    }
}