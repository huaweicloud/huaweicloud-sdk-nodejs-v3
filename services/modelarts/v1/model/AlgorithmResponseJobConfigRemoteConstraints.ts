

export class AlgorithmResponseJobConfigRemoteConstraints {
    private 'data_type'?: string;
    public attributes?: Array<{ [key: string]: string; }>;
    public constructor() { 
    }
    public withDataType(dataType: string): AlgorithmResponseJobConfigRemoteConstraints {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withAttributes(attributes: Array<{ [key: string]: string; }>): AlgorithmResponseJobConfigRemoteConstraints {
        this['attributes'] = attributes;
        return this;
    }
}