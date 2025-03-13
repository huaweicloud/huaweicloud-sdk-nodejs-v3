import { CreateOrUpdateSecretDetail } from './CreateOrUpdateSecretDetail';


export class CreateOrUpdateSecretReq {
    private 'api_version'?: string;
    public kind?: string;
    public spec?: CreateOrUpdateSecretDetail;
    public constructor(apiVersion?: string, kind?: string, spec?: CreateOrUpdateSecretDetail) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): CreateOrUpdateSecretReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): CreateOrUpdateSecretReq {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: CreateOrUpdateSecretDetail): CreateOrUpdateSecretReq {
        this['spec'] = spec;
        return this;
    }
}