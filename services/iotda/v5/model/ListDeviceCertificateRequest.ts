

export class ListDeviceCertificateRequest {
    private 'Instance-Id'?: string;
    private 'common_name'?: string;
    public fingerprint?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListDeviceCertificateRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withCommonName(commonName: string): ListDeviceCertificateRequest {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withFingerprint(fingerprint: string): ListDeviceCertificateRequest {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withLimit(limit: number): ListDeviceCertificateRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDeviceCertificateRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListDeviceCertificateRequest {
        this['offset'] = offset;
        return this;
    }
}