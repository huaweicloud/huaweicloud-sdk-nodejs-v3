
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetadataOptionsResponse extends SdkResponse {
    private 'http_endpoint'?: ShowMetadataOptionsResponseHttpEndpointEnum | string;
    private 'http_tokens'?: ShowMetadataOptionsResponseHttpTokensEnum | string;
    public constructor() { 
        super();
    }
    public withHttpEndpoint(httpEndpoint: ShowMetadataOptionsResponseHttpEndpointEnum | string): ShowMetadataOptionsResponse {
        this['http_endpoint'] = httpEndpoint;
        return this;
    }
    public set httpEndpoint(httpEndpoint: ShowMetadataOptionsResponseHttpEndpointEnum | string  | undefined) {
        this['http_endpoint'] = httpEndpoint;
    }
    public get httpEndpoint(): ShowMetadataOptionsResponseHttpEndpointEnum | string | undefined {
        return this['http_endpoint'];
    }
    public withHttpTokens(httpTokens: ShowMetadataOptionsResponseHttpTokensEnum | string): ShowMetadataOptionsResponse {
        this['http_tokens'] = httpTokens;
        return this;
    }
    public set httpTokens(httpTokens: ShowMetadataOptionsResponseHttpTokensEnum | string  | undefined) {
        this['http_tokens'] = httpTokens;
    }
    public get httpTokens(): ShowMetadataOptionsResponseHttpTokensEnum | string | undefined {
        return this['http_tokens'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMetadataOptionsResponseHttpEndpointEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMetadataOptionsResponseHttpTokensEnum {
    OPTIONAL = 'optional',
    REQUIRED = 'required'
}
