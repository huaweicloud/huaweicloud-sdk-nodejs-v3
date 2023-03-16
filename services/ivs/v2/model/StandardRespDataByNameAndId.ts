

export class StandardRespDataByNameAndId {
    private 'verification_result': string | undefined;
    private 'verification_message': string | undefined;
    private 'verification_code': number | undefined;
    public similarity: string;
    public constructor(verificationResult?: any, verificationMessage?: any, verificationCode?: any, similarity?: any) { 
        this['verification_result'] = verificationResult;
        this['verification_message'] = verificationMessage;
        this['verification_code'] = verificationCode;
        this['similarity'] = similarity;
    }
    public withVerificationResult(verificationResult: string): StandardRespDataByNameAndId {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: string | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult() {
        return this['verification_result'];
    }
    public withVerificationMessage(verificationMessage: string): StandardRespDataByNameAndId {
        this['verification_message'] = verificationMessage;
        return this;
    }
    public set verificationMessage(verificationMessage: string | undefined) {
        this['verification_message'] = verificationMessage;
    }
    public get verificationMessage() {
        return this['verification_message'];
    }
    public withVerificationCode(verificationCode: number): StandardRespDataByNameAndId {
        this['verification_code'] = verificationCode;
        return this;
    }
    public set verificationCode(verificationCode: number | undefined) {
        this['verification_code'] = verificationCode;
    }
    public get verificationCode() {
        return this['verification_code'];
    }
    public withSimilarity(similarity: string): StandardRespDataByNameAndId {
        this['similarity'] = similarity;
        return this;
    }
}