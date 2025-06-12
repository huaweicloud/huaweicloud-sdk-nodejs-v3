

export class UpdateBaremetalServerMetadataOptionsRequestBody {
    private 'http_endpoint'?: UpdateBaremetalServerMetadataOptionsRequestBodyHttpEndpointEnum | string;
    private 'http_tokens'?: UpdateBaremetalServerMetadataOptionsRequestBodyHttpTokensEnum | string;
    public constructor() { 
    }
    public withHttpEndpoint(httpEndpoint: UpdateBaremetalServerMetadataOptionsRequestBodyHttpEndpointEnum | string): UpdateBaremetalServerMetadataOptionsRequestBody {
        this['http_endpoint'] = httpEndpoint;
        return this;
    }
    public set httpEndpoint(httpEndpoint: UpdateBaremetalServerMetadataOptionsRequestBodyHttpEndpointEnum | string  | undefined) {
        this['http_endpoint'] = httpEndpoint;
    }
    public get httpEndpoint(): UpdateBaremetalServerMetadataOptionsRequestBodyHttpEndpointEnum | string | undefined {
        return this['http_endpoint'];
    }
    public withHttpTokens(httpTokens: UpdateBaremetalServerMetadataOptionsRequestBodyHttpTokensEnum | string): UpdateBaremetalServerMetadataOptionsRequestBody {
        this['http_tokens'] = httpTokens;
        return this;
    }
    public set httpTokens(httpTokens: UpdateBaremetalServerMetadataOptionsRequestBodyHttpTokensEnum | string  | undefined) {
        this['http_tokens'] = httpTokens;
    }
    public get httpTokens(): UpdateBaremetalServerMetadataOptionsRequestBodyHttpTokensEnum | string | undefined {
        return this['http_tokens'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateBaremetalServerMetadataOptionsRequestBodyHttpEndpointEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateBaremetalServerMetadataOptionsRequestBodyHttpTokensEnum {
    OPTIONAL = 'optional',
    REQUIRED = 'required'
}
