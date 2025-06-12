
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaremetalServerMetadataOptionsResponse extends SdkResponse {
    private 'http_endpoint'?: ShowBaremetalServerMetadataOptionsResponseHttpEndpointEnum | string;
    private 'http_tokens'?: ShowBaremetalServerMetadataOptionsResponseHttpTokensEnum | string;
    public constructor() { 
        super();
    }
    public withHttpEndpoint(httpEndpoint: ShowBaremetalServerMetadataOptionsResponseHttpEndpointEnum | string): ShowBaremetalServerMetadataOptionsResponse {
        this['http_endpoint'] = httpEndpoint;
        return this;
    }
    public set httpEndpoint(httpEndpoint: ShowBaremetalServerMetadataOptionsResponseHttpEndpointEnum | string  | undefined) {
        this['http_endpoint'] = httpEndpoint;
    }
    public get httpEndpoint(): ShowBaremetalServerMetadataOptionsResponseHttpEndpointEnum | string | undefined {
        return this['http_endpoint'];
    }
    public withHttpTokens(httpTokens: ShowBaremetalServerMetadataOptionsResponseHttpTokensEnum | string): ShowBaremetalServerMetadataOptionsResponse {
        this['http_tokens'] = httpTokens;
        return this;
    }
    public set httpTokens(httpTokens: ShowBaremetalServerMetadataOptionsResponseHttpTokensEnum | string  | undefined) {
        this['http_tokens'] = httpTokens;
    }
    public get httpTokens(): ShowBaremetalServerMetadataOptionsResponseHttpTokensEnum | string | undefined {
        return this['http_tokens'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBaremetalServerMetadataOptionsResponseHttpEndpointEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowBaremetalServerMetadataOptionsResponseHttpTokensEnum {
    OPTIONAL = 'optional',
    REQUIRED = 'required'
}
