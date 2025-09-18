

export class NewExtensionDataSourceBindings {
    public target?: string;
    public endpointId?: string;
    private 'data_source_name'?: string;
    public constructor() { 
    }
    public withTarget(target: string): NewExtensionDataSourceBindings {
        this['target'] = target;
        return this;
    }
    public withEndpointId(endpointId: string): NewExtensionDataSourceBindings {
        this['endpointId'] = endpointId;
        return this;
    }
    public withDataSourceName(dataSourceName: string): NewExtensionDataSourceBindings {
        this['data_source_name'] = dataSourceName;
        return this;
    }
    public set dataSourceName(dataSourceName: string  | undefined) {
        this['data_source_name'] = dataSourceName;
    }
    public get dataSourceName(): string | undefined {
        return this['data_source_name'];
    }
}