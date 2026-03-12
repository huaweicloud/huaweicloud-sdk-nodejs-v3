

export class ExportCertificateRequestBody {
    private 'is_compressed'?: string;
    public type?: string;
    private 'is_sm_standard'?: string;
    public password?: string;
    public constructor(isCompressed?: string, type?: string) { 
        this['is_compressed'] = isCompressed;
        this['type'] = type;
    }
    public withIsCompressed(isCompressed: string): ExportCertificateRequestBody {
        this['is_compressed'] = isCompressed;
        return this;
    }
    public set isCompressed(isCompressed: string  | undefined) {
        this['is_compressed'] = isCompressed;
    }
    public get isCompressed(): string | undefined {
        return this['is_compressed'];
    }
    public withType(type: string): ExportCertificateRequestBody {
        this['type'] = type;
        return this;
    }
    public withIsSmStandard(isSmStandard: string): ExportCertificateRequestBody {
        this['is_sm_standard'] = isSmStandard;
        return this;
    }
    public set isSmStandard(isSmStandard: string  | undefined) {
        this['is_sm_standard'] = isSmStandard;
    }
    public get isSmStandard(): string | undefined {
        return this['is_sm_standard'];
    }
    public withPassword(password: string): ExportCertificateRequestBody {
        this['password'] = password;
        return this;
    }
}