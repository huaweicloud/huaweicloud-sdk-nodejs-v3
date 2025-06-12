

export class UpdateServerMetadataOptionsRequestBody {
    private 'http_endpoint'?: UpdateServerMetadataOptionsRequestBodyHttpEndpointEnum | string;
    private 'http_tokens'?: UpdateServerMetadataOptionsRequestBodyHttpTokensEnum | string;
    public constructor() { 
    }
    public withHttpEndpoint(httpEndpoint: UpdateServerMetadataOptionsRequestBodyHttpEndpointEnum | string): UpdateServerMetadataOptionsRequestBody {
        this['http_endpoint'] = httpEndpoint;
        return this;
    }
    public set httpEndpoint(httpEndpoint: UpdateServerMetadataOptionsRequestBodyHttpEndpointEnum | string  | undefined) {
        this['http_endpoint'] = httpEndpoint;
    }
    public get httpEndpoint(): UpdateServerMetadataOptionsRequestBodyHttpEndpointEnum | string | undefined {
        return this['http_endpoint'];
    }
    public withHttpTokens(httpTokens: UpdateServerMetadataOptionsRequestBodyHttpTokensEnum | string): UpdateServerMetadataOptionsRequestBody {
        this['http_tokens'] = httpTokens;
        return this;
    }
    public set httpTokens(httpTokens: UpdateServerMetadataOptionsRequestBodyHttpTokensEnum | string  | undefined) {
        this['http_tokens'] = httpTokens;
    }
    public get httpTokens(): UpdateServerMetadataOptionsRequestBodyHttpTokensEnum | string | undefined {
        return this['http_tokens'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateServerMetadataOptionsRequestBodyHttpEndpointEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateServerMetadataOptionsRequestBodyHttpTokensEnum {
    OPTIONAL = 'optional',
    REQUIRED = 'required'
}
