import { KeyDetails } from './KeyDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeysResponse extends SdkResponse {
    public keys?: Array<string>;
    private 'key_details'?: Array<KeyDetails>;
    private 'next_marker'?: string;
    public truncated?: ListKeysResponseTruncatedEnum | string;
    public total?: number;
    public constructor() { 
        super();
    }
    public withKeys(keys: Array<string>): ListKeysResponse {
        this['keys'] = keys;
        return this;
    }
    public withKeyDetails(keyDetails: Array<KeyDetails>): ListKeysResponse {
        this['key_details'] = keyDetails;
        return this;
    }
    public set keyDetails(keyDetails: Array<KeyDetails>  | undefined) {
        this['key_details'] = keyDetails;
    }
    public get keyDetails(): Array<KeyDetails> | undefined {
        return this['key_details'];
    }
    public withNextMarker(nextMarker: string): ListKeysResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withTruncated(truncated: ListKeysResponseTruncatedEnum | string): ListKeysResponse {
        this['truncated'] = truncated;
        return this;
    }
    public withTotal(total: number): ListKeysResponse {
        this['total'] = total;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListKeysResponseTruncatedEnum {
    TRUE = 'true',
    FALSE = 'false'
}
