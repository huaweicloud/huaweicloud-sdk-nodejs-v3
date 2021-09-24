import { IdcardResult } from './IdcardResult';


export class ExtentionRespDataByIdCardImage {
    private 'verification_result'?: string | undefined;
    private 'verification_message'?: string | undefined;
    private 'verification_code'?: number | undefined;
    private 'idcard_result'?: IdcardResult | undefined;
    public constructor() { 
    }
    public withVerificationResult(verificationResult: string): ExtentionRespDataByIdCardImage {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: string | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult() {
        return this['verification_result'];
    }
    public withVerificationMessage(verificationMessage: string): ExtentionRespDataByIdCardImage {
        this['verification_message'] = verificationMessage;
        return this;
    }
    public set verificationMessage(verificationMessage: string | undefined) {
        this['verification_message'] = verificationMessage;
    }
    public get verificationMessage() {
        return this['verification_message'];
    }
    public withVerificationCode(verificationCode: number): ExtentionRespDataByIdCardImage {
        this['verification_code'] = verificationCode;
        return this;
    }
    public set verificationCode(verificationCode: number | undefined) {
        this['verification_code'] = verificationCode;
    }
    public get verificationCode() {
        return this['verification_code'];
    }
    public withIdcardResult(idcardResult: IdcardResult): ExtentionRespDataByIdCardImage {
        this['idcard_result'] = idcardResult;
        return this;
    }
    public set idcardResult(idcardResult: IdcardResult | undefined) {
        this['idcard_result'] = idcardResult;
    }
    public get idcardResult() {
        return this['idcard_result'];
    }
}