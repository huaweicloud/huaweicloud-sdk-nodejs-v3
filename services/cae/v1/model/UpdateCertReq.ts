import { ApiVersionObj } from './ApiVersionObj';
import { CertificateKindObj } from './CertificateKindObj';
import { UpdateSpecCert } from './UpdateSpecCert';


export class UpdateCertReq {
    private 'api_version'?: ApiVersionObj;
    public kind?: CertificateKindObj;
    public spec?: UpdateSpecCert;
    public constructor(apiVersion?: ApiVersionObj, kind?: CertificateKindObj, spec?: UpdateSpecCert) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: ApiVersionObj): UpdateCertReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: CertificateKindObj): UpdateCertReq {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: UpdateSpecCert): UpdateCertReq {
        this['spec'] = spec;
        return this;
    }
}