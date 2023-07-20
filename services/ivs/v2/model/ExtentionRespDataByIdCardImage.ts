import { IdcardResult } from './IdcardResult';


export class ExtentionRespDataByIdCardImage {
    private 'verification_result'?: string;
    private 'verification_message'?: string;
    private 'verification_code'?: number;
    private 'idcard_result'?: IdcardResult;
    public constructor() { 
    }
    public withVerificationResult(verificationResult: string): ExtentionRespDataByIdCardImage {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: string  | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult(): string | undefined {
        return this['verification_result'];
    }
    public withVerificationMessage(verificationMessage: string): ExtentionRespDataByIdCardImage {
        this['verification_message'] = verificationMessage;
        return this;
    }
    public set verificationMessage(verificationMessage: string  | undefined) {
        this['verification_message'] = verificationMessage;
    }
    public get verificationMessage(): string | undefined {
        return this['verification_message'];
    }
    public withVerificationCode(verificationCode: number): ExtentionRespDataByIdCardImage {
        this['verification_code'] = verificationCode;
        return this;
    }
    public set verificationCode(verificationCode: number  | undefined) {
        this['verification_code'] = verificationCode;
    }
    public get verificationCode(): number | undefined {
        return this['verification_code'];
    }
    public withIdcardResult(idcardResult: IdcardResult): ExtentionRespDataByIdCardImage {
        this['idcard_result'] = idcardResult;
        return this;
    }
    public set idcardResult(idcardResult: IdcardResult  | undefined) {
        this['idcard_result'] = idcardResult;
    }
    public get idcardResult(): IdcardResult | undefined {
        return this['idcard_result'];
    }
}