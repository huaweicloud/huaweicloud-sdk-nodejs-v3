
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerMetadataOptionsResponse extends SdkResponse {
    private 'http_endpoint'?: ShowServerMetadataOptionsResponseHttpEndpointEnum | string;
    private 'http_tokens'?: ShowServerMetadataOptionsResponseHttpTokensEnum | string;
    public constructor() { 
        super();
    }
    public withHttpEndpoint(httpEndpoint: ShowServerMetadataOptionsResponseHttpEndpointEnum | string): ShowServerMetadataOptionsResponse {
        this['http_endpoint'] = httpEndpoint;
        return this;
    }
    public set httpEndpoint(httpEndpoint: ShowServerMetadataOptionsResponseHttpEndpointEnum | string  | undefined) {
        this['http_endpoint'] = httpEndpoint;
    }
    public get httpEndpoint(): ShowServerMetadataOptionsResponseHttpEndpointEnum | string | undefined {
        return this['http_endpoint'];
    }
    public withHttpTokens(httpTokens: ShowServerMetadataOptionsResponseHttpTokensEnum | string): ShowServerMetadataOptionsResponse {
        this['http_tokens'] = httpTokens;
        return this;
    }
    public set httpTokens(httpTokens: ShowServerMetadataOptionsResponseHttpTokensEnum | string  | undefined) {
        this['http_tokens'] = httpTokens;
    }
    public get httpTokens(): ShowServerMetadataOptionsResponseHttpTokensEnum | string | undefined {
        return this['http_tokens'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowServerMetadataOptionsResponseHttpEndpointEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowServerMetadataOptionsResponseHttpTokensEnum {
    OPTIONAL = 'optional',
    REQUIRED = 'required'
}
