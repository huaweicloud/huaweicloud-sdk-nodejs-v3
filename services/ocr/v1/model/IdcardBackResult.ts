import { IdcardBackVerificationResult } from './IdcardBackVerificationResult';
import { IdcardScoreInfoResult } from './IdcardScoreInfoResult';


export class IdcardBackResult {
    public issue?: string;
    private 'valid_from'?: string;
    private 'valid_to'?: string;
    private 'adjusted_image'?: string;
    private 'verification_result'?: IdcardBackVerificationResult;
    private 'text_location'?: object;
    private 'detect_reproduce_result'?: boolean;
    private 'detect_copy_result'?: boolean;
    private 'detect_tampering_result'?: boolean;
    private 'detect_border_integrity_result'?: boolean;
    private 'detect_blocking_within_border_result'?: boolean;
    private 'detect_blur_result'?: boolean;
    private 'detect_interim_result'?: boolean;
    private 'detect_glare_result'?: boolean;
    private 'score_info'?: IdcardScoreInfoResult;
    public constructor() { 
    }
    public withIssue(issue: string): IdcardBackResult {
        this['issue'] = issue;
        return this;
    }
    public withValidFrom(validFrom: string): IdcardBackResult {
        this['valid_from'] = validFrom;
        return this;
    }
    public set validFrom(validFrom: string  | undefined) {
        this['valid_from'] = validFrom;
    }
    public get validFrom(): string | undefined {
        return this['valid_from'];
    }
    public withValidTo(validTo: string): IdcardBackResult {
        this['valid_to'] = validTo;
        return this;
    }
    public set validTo(validTo: string  | undefined) {
        this['valid_to'] = validTo;
    }
    public get validTo(): string | undefined {
        return this['valid_to'];
    }
    public withAdjustedImage(adjustedImage: string): IdcardBackResult {
        this['adjusted_image'] = adjustedImage;
        return this;
    }
    public set adjustedImage(adjustedImage: string  | undefined) {
        this['adjusted_image'] = adjustedImage;
    }
    public get adjustedImage(): string | undefined {
        return this['adjusted_image'];
    }
    public withVerificationResult(verificationResult: IdcardBackVerificationResult): IdcardBackResult {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: IdcardBackVerificationResult  | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult(): IdcardBackVerificationResult | undefined {
        return this['verification_result'];
    }
    public withTextLocation(textLocation: object): IdcardBackResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
    public withDetectReproduceResult(detectReproduceResult: boolean): IdcardBackResult {
        this['detect_reproduce_result'] = detectReproduceResult;
        return this;
    }
    public set detectReproduceResult(detectReproduceResult: boolean  | undefined) {
        this['detect_reproduce_result'] = detectReproduceResult;
    }
    public get detectReproduceResult(): boolean | undefined {
        return this['detect_reproduce_result'];
    }
    public withDetectCopyResult(detectCopyResult: boolean): IdcardBackResult {
        this['detect_copy_result'] = detectCopyResult;
        return this;
    }
    public set detectCopyResult(detectCopyResult: boolean  | undefined) {
        this['detect_copy_result'] = detectCopyResult;
    }
    public get detectCopyResult(): boolean | undefined {
        return this['detect_copy_result'];
    }
    public withDetectTamperingResult(detectTamperingResult: boolean): IdcardBackResult {
        this['detect_tampering_result'] = detectTamperingResult;
        return this;
    }
    public set detectTamperingResult(detectTamperingResult: boolean  | undefined) {
        this['detect_tampering_result'] = detectTamperingResult;
    }
    public get detectTamperingResult(): boolean | undefined {
        return this['detect_tampering_result'];
    }
    public withDetectBorderIntegrityResult(detectBorderIntegrityResult: boolean): IdcardBackResult {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
        return this;
    }
    public set detectBorderIntegrityResult(detectBorderIntegrityResult: boolean  | undefined) {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
    }
    public get detectBorderIntegrityResult(): boolean | undefined {
        return this['detect_border_integrity_result'];
    }
    public withDetectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean): IdcardBackResult {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
        return this;
    }
    public set detectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean  | undefined) {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
    }
    public get detectBlockingWithinBorderResult(): boolean | undefined {
        return this['detect_blocking_within_border_result'];
    }
    public withDetectBlurResult(detectBlurResult: boolean): IdcardBackResult {
        this['detect_blur_result'] = detectBlurResult;
        return this;
    }
    public set detectBlurResult(detectBlurResult: boolean  | undefined) {
        this['detect_blur_result'] = detectBlurResult;
    }
    public get detectBlurResult(): boolean | undefined {
        return this['detect_blur_result'];
    }
    public withDetectInterimResult(detectInterimResult: boolean): IdcardBackResult {
        this['detect_interim_result'] = detectInterimResult;
        return this;
    }
    public set detectInterimResult(detectInterimResult: boolean  | undefined) {
        this['detect_interim_result'] = detectInterimResult;
    }
    public get detectInterimResult(): boolean | undefined {
        return this['detect_interim_result'];
    }
    public withDetectGlareResult(detectGlareResult: boolean): IdcardBackResult {
        this['detect_glare_result'] = detectGlareResult;
        return this;
    }
    public set detectGlareResult(detectGlareResult: boolean  | undefined) {
        this['detect_glare_result'] = detectGlareResult;
    }
    public get detectGlareResult(): boolean | undefined {
        return this['detect_glare_result'];
    }
    public withScoreInfo(scoreInfo: IdcardScoreInfoResult): IdcardBackResult {
        this['score_info'] = scoreInfo;
        return this;
    }
    public set scoreInfo(scoreInfo: IdcardScoreInfoResult  | undefined) {
        this['score_info'] = scoreInfo;
    }
    public get scoreInfo(): IdcardScoreInfoResult | undefined {
        return this['score_info'];
    }
}