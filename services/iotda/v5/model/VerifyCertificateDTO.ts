

export class VerifyCertificateDTO {
    private 'verify_content'?: string;
    public constructor(verifyContent?: string) { 
        this['verify_content'] = verifyContent;
    }
    public withVerifyContent(verifyContent: string): VerifyCertificateDTO {
        this['verify_content'] = verifyContent;
        return this;
    }
    public set verifyContent(verifyContent: string  | undefined) {
        this['verify_content'] = verifyContent;
    }
    public get verifyContent(): string | undefined {
        return this['verify_content'];
    }
}