import { SecretDetail } from './SecretDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecretsResponse extends SdkResponse {
    private 'api_version'?: string;
    public kind?: string;
    public items?: Array<SecretDetail>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListSecretsResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): ListSecretsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<SecretDetail>): ListSecretsResponse {
        this['items'] = items;
        return this;
    }
}