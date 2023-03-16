import { IdcardResult } from './IdcardResult';
import { VideoResult } from './VideoResult';


export class RespDataByVideoAndIdCardImage {
    private 'verification_result': string | undefined;
    private 'verification_message': string | undefined;
    private 'verification_code': number | undefined;
    public similarity: string;
    private 'idcard_result': IdcardResult | undefined;
    private 'video_result': VideoResult | undefined;
    public constructor(verificationResult?: any, verificationMessage?: any, verificationCode?: any, similarity?: any, idcardResult?: any, videoResult?: any) { 
        this['verification_result'] = verificationResult;
        this['verification_message'] = verificationMessage;
        this['verification_code'] = verificationCode;
        this['similarity'] = similarity;
        this['idcard_result'] = idcardResult;
        this['video_result'] = videoResult;
    }
    public withVerificationResult(verificationResult: string): RespDataByVideoAndIdCardImage {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: string | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult() {
        return this['verification_result'];
    }
    public withVerificationMessage(verificationMessage: string): RespDataByVideoAndIdCardImage {
        this['verification_message'] = verificationMessage;
        return this;
    }
    public set verificationMessage(verificationMessage: string | undefined) {
        this['verification_message'] = verificationMessage;
    }
    public get verificationMessage() {
        return this['verification_message'];
    }
    public withVerificationCode(verificationCode: number): RespDataByVideoAndIdCardImage {
        this['verification_code'] = verificationCode;
        return this;
    }
    public set verificationCode(verificationCode: number | undefined) {
        this['verification_code'] = verificationCode;
    }
    public get verificationCode() {
        return this['verification_code'];
    }
    public withSimilarity(similarity: string): RespDataByVideoAndIdCardImage {
        this['similarity'] = similarity;
        return this;
    }
    public withIdcardResult(idcardResult: IdcardResult): RespDataByVideoAndIdCardImage {
        this['idcard_result'] = idcardResult;
        return this;
    }
    public set idcardResult(idcardResult: IdcardResult | undefined) {
        this['idcard_result'] = idcardResult;
    }
    public get idcardResult() {
        return this['idcard_result'];
    }
    public withVideoResult(videoResult: VideoResult): RespDataByVideoAndIdCardImage {
        this['video_result'] = videoResult;
        return this;
    }
    public set videoResult(videoResult: VideoResult | undefined) {
        this['video_result'] = videoResult;
    }
    public get videoResult() {
        return this['video_result'];
    }
}