import { MetaCert } from './MetaCert';
import { SpecCert } from './SpecCert';


export class CertItem {
    public metadata?: MetaCert;
    public spec?: SpecCert;
    public constructor() { 
    }
    public withMetadata(metadata: MetaCert): CertItem {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: SpecCert): CertItem {
        this['spec'] = spec;
        return this;
    }
}