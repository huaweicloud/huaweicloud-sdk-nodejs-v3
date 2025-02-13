import { ApiVersionObj } from './ApiVersionObj';
import { CertificateKindObj } from './CertificateKindObj';
import { CreateMetaCert } from './CreateMetaCert';
import { CreateSpecCert } from './CreateSpecCert';


export class CertReq {
    private 'api_version'?: ApiVersionObj;
    public kind?: CertificateKindObj;
    public metadata?: CreateMetaCert;
    public spec?: CreateSpecCert;
    public constructor(apiVersion?: ApiVersionObj, kind?: CertificateKindObj, metadata?: CreateMetaCert, spec?: CreateSpecCert) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: ApiVersionObj): CertReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: CertificateKindObj): CertReq {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: CreateMetaCert): CertReq {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: CreateSpecCert): CertReq {
        this['spec'] = spec;
        return this;
    }
}