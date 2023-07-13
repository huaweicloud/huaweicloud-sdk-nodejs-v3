import { VideoResult } from './VideoResult';


export class StandardRespDataByVideoAndNameAndId {
    private 'verification_result': string | undefined;
    private 'verification_message': string | undefined;
    private 'verification_code': number | undefined;
    public similarity: string;
    private 'video_result': VideoResult | undefined;
    public constructor(verificationResult?: any, verificationMessage?: any, verificationCode?: any, similarity?: any, videoResult?: any) { 
        this['verification_result'] = verificationResult;
        this['verification_message'] = verificationMessage;
        this['verification_code'] = verificationCode;
        this['similarity'] = similarity;
        this['video_result'] = videoResult;
    }
    public withVerificationResult(verificationResult: string): StandardRespDataByVideoAndNameAndId {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: string | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult() {
        return this['verification_result'];
    }
    public withVerificationMessage(verificationMessage: string): StandardRespDataByVideoAndNameAndId {
        this['verification_message'] = verificationMessage;
        return this;
    }
    public set verificationMessage(verificationMessage: string | undefined) {
        this['verification_message'] = verificationMessage;
    }
    public get verificationMessage() {
        return this['verification_message'];
    }
    public withVerificationCode(verificationCode: number): StandardRespDataByVideoAndNameAndId {
        this['verification_code'] = verificationCode;
        return this;
    }
    public set verificationCode(verificationCode: number | undefined) {
        this['verification_code'] = verificationCode;
    }
    public get verificationCode() {
        return this['verification_code'];
    }
    public withSimilarity(similarity: string): StandardRespDataByVideoAndNameAndId {
        this['similarity'] = similarity;
        return this;
    }
    public withVideoResult(videoResult: VideoResult): StandardRespDataByVideoAndNameAndId {
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