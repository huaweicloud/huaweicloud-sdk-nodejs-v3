import { UpdateCertReq } from './UpdateCertReq';


export class UpdateCertificateRequest {
    private 'certificate_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public body?: UpdateCertReq;
    public constructor(certificateId?: string, xEnvironmentID?: string) { 
        this['certificate_id'] = certificateId;
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withCertificateId(certificateId: string): UpdateCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): UpdateCertificateRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): UpdateCertificateRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withBody(body: UpdateCertReq): UpdateCertificateRequest {
        this['body'] = body;
        return this;
    }
}