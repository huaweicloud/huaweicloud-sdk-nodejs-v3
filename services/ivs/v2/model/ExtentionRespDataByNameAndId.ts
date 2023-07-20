

export class ExtentionRespDataByNameAndId {
    private 'verification_result'?: string;
    private 'verification_message'?: string;
    private 'verification_code'?: number;
    public constructor() { 
    }
    public withVerificationResult(verificationResult: string): ExtentionRespDataByNameAndId {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: string  | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult(): string | undefined {
        return this['verification_result'];
    }
    public withVerificationMessage(verificationMessage: string): ExtentionRespDataByNameAndId {
        this['verification_message'] = verificationMessage;
        return this;
    }
    public set verificationMessage(verificationMessage: string  | undefined) {
        this['verification_message'] = verificationMessage;
    }
    public get verificationMessage(): string | undefined {
        return this['verification_message'];
    }
    public withVerificationCode(verificationCode: number): ExtentionRespDataByNameAndId {
        this['verification_code'] = verificationCode;
        return this;
    }
    public set verificationCode(verificationCode: number  | undefined) {
        this['verification_code'] = verificationCode;
    }
    public get verificationCode(): number | undefined {
        return this['verification_code'];
    }
}