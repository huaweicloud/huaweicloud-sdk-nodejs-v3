

export class ListCertificatesV2Request {
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'common_name'?: string;
    private 'signature_algorithm'?: string;
    public type?: ListCertificatesV2RequestTypeEnum | string;
    private 'instance_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withOffset(offset: number): ListCertificatesV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCertificatesV2Request {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListCertificatesV2Request {
        this['name'] = name;
        return this;
    }
    public withCommonName(commonName: string): ListCertificatesV2Request {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ListCertificatesV2Request {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withType(type: ListCertificatesV2RequestTypeEnum | string): ListCertificatesV2Request {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): ListCertificatesV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCertificatesV2RequestTypeEnum {
    INSTANCE = 'instance',
    GLOBAL = 'global'
}
