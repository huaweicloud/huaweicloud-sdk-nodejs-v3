import { SecretDetail } from './SecretDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecretResponse extends SdkResponse {
    private 'api_version'?: string;
    public kind?: string;
    public spec?: SecretDetail;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateSecretResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): CreateSecretResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: SecretDetail): CreateSecretResponse {
        this['spec'] = spec;
        return this;
    }
}