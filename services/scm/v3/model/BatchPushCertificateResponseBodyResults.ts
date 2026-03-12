

export class BatchPushCertificateResponseBodyResults {
    private 'project_name'?: string;
    private 'cert_id'?: string;
    public message?: string;
    public constructor() { 
    }
    public withProjectName(projectName: string): BatchPushCertificateResponseBodyResults {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withCertId(certId: string): BatchPushCertificateResponseBodyResults {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withMessage(message: string): BatchPushCertificateResponseBodyResults {
        this['message'] = message;
        return this;
    }
}