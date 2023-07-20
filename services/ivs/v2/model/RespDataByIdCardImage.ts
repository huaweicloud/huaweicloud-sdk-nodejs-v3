import { IdcardResult } from './IdcardResult';


export class RespDataByIdCardImage {
    private 'verification_result'?: string;
    private 'verification_message'?: string;
    private 'verification_code'?: number;
    public similarity?: string;
    private 'idcard_result'?: IdcardResult;
    public constructor(verificationResult?: string, verificationMessage?: string, verificationCode?: number, similarity?: string, idcardResult?: IdcardResult) { 
        this['verification_result'] = verificationResult;
        this['verification_message'] = verificationMessage;
        this['verification_code'] = verificationCode;
        this['similarity'] = similarity;
        this['idcard_result'] = idcardResult;
    }
    public withVerificationResult(verificationResult: string): RespDataByIdCardImage {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: string  | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult(): string | undefined {
        return this['verification_result'];
    }
    public withVerificationMessage(verificationMessage: string): RespDataByIdCardImage {
        this['verification_message'] = verificationMessage;
        return this;
    }
    public set verificationMessage(verificationMessage: string  | undefined) {
        this['verification_message'] = verificationMessage;
    }
    public get verificationMessage(): string | undefined {
        return this['verification_message'];
    }
    public withVerificationCode(verificationCode: number): RespDataByIdCardImage {
        this['verification_code'] = verificationCode;
        return this;
    }
    public set verificationCode(verificationCode: number  | undefined) {
        this['verification_code'] = verificationCode;
    }
    public get verificationCode(): number | undefined {
        return this['verification_code'];
    }
    public withSimilarity(similarity: string): RespDataByIdCardImage {
        this['similarity'] = similarity;
        return this;
    }
    public withIdcardResult(idcardResult: IdcardResult): RespDataByIdCardImage {
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