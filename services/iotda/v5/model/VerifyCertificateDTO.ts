

export class VerifyCertificateDTO {
    private 'verify_content': string | undefined;
    public constructor(verifyContent: any) { 
        this['verify_content'] = verifyContent;
    }
    public withVerifyContent(verifyContent: string): VerifyCertificateDTO {
        this['verify_content'] = verifyContent;
        return this;
    }
    public set verifyContent(verifyContent: string | undefined) {
        this['verify_content'] = verifyContent;
    }
    public get verifyContent() {
        return this['verify_content'];
    }
}