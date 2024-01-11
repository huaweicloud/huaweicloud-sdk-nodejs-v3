import { IdcardFrontVerificationResult } from './IdcardFrontVerificationResult';
import { IdcardScoreInfoResult } from './IdcardScoreInfoResult';


export class IdcardFrontResult {
    public name?: string;
    public sex?: string;
    public birth?: string;
    public ethnicity?: string;
    public address?: string;
    private 'number'?: string;
    private 'verification_result'?: IdcardFrontVerificationResult;
    private 'text_location'?: object;
    private 'portrait_location'?: Array<Array<number>>;
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
    public withName(name: string): IdcardFrontResult {
        this['name'] = name;
        return this;
    }
    public withSex(sex: string): IdcardFrontResult {
        this['sex'] = sex;
        return this;
    }
    public withBirth(birth: string): IdcardFrontResult {
        this['birth'] = birth;
        return this;
    }
    public withEthnicity(ethnicity: string): IdcardFrontResult {
        this['ethnicity'] = ethnicity;
        return this;
    }
    public withAddress(address: string): IdcardFrontResult {
        this['address'] = address;
        return this;
    }
    public withModelNumber(modelNumber: string): IdcardFrontResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withVerificationResult(verificationResult: IdcardFrontVerificationResult): IdcardFrontResult {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: IdcardFrontVerificationResult  | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult(): IdcardFrontVerificationResult | undefined {
        return this['verification_result'];
    }
    public withTextLocation(textLocation: object): IdcardFrontResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): IdcardFrontResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withDetectReproduceResult(detectReproduceResult: boolean): IdcardFrontResult {
        this['detect_reproduce_result'] = detectReproduceResult;
        return this;
    }
    public set detectReproduceResult(detectReproduceResult: boolean  | undefined) {
        this['detect_reproduce_result'] = detectReproduceResult;
    }
    public get detectReproduceResult(): boolean | undefined {
        return this['detect_reproduce_result'];
    }
    public withDetectCopyResult(detectCopyResult: boolean): IdcardFrontResult {
        this['detect_copy_result'] = detectCopyResult;
        return this;
    }
    public set detectCopyResult(detectCopyResult: boolean  | undefined) {
        this['detect_copy_result'] = detectCopyResult;
    }
    public get detectCopyResult(): boolean | undefined {
        return this['detect_copy_result'];
    }
    public withDetectTamperingResult(detectTamperingResult: boolean): IdcardFrontResult {
        this['detect_tampering_result'] = detectTamperingResult;
        return this;
    }
    public set detectTamperingResult(detectTamperingResult: boolean  | undefined) {
        this['detect_tampering_result'] = detectTamperingResult;
    }
    public get detectTamperingResult(): boolean | undefined {
        return this['detect_tampering_result'];
    }
    public withDetectBorderIntegrityResult(detectBorderIntegrityResult: boolean): IdcardFrontResult {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
        return this;
    }
    public set detectBorderIntegrityResult(detectBorderIntegrityResult: boolean  | undefined) {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
    }
    public get detectBorderIntegrityResult(): boolean | undefined {
        return this['detect_border_integrity_result'];
    }
    public withDetectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean): IdcardFrontResult {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
        return this;
    }
    public set detectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean  | undefined) {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
    }
    public get detectBlockingWithinBorderResult(): boolean | undefined {
        return this['detect_blocking_within_border_result'];
    }
    public withDetectBlurResult(detectBlurResult: boolean): IdcardFrontResult {
        this['detect_blur_result'] = detectBlurResult;
        return this;
    }
    public set detectBlurResult(detectBlurResult: boolean  | undefined) {
        this['detect_blur_result'] = detectBlurResult;
    }
    public get detectBlurResult(): boolean | undefined {
        return this['detect_blur_result'];
    }
    public withDetectInterimResult(detectInterimResult: boolean): IdcardFrontResult {
        this['detect_interim_result'] = detectInterimResult;
        return this;
    }
    public set detectInterimResult(detectInterimResult: boolean  | undefined) {
        this['detect_interim_result'] = detectInterimResult;
    }
    public get detectInterimResult(): boolean | undefined {
        return this['detect_interim_result'];
    }
    public withDetectGlareResult(detectGlareResult: boolean): IdcardFrontResult {
        this['detect_glare_result'] = detectGlareResult;
        return this;
    }
    public set detectGlareResult(detectGlareResult: boolean  | undefined) {
        this['detect_glare_result'] = detectGlareResult;
    }
    public get detectGlareResult(): boolean | undefined {
        return this['detect_glare_result'];
    }
    public withScoreInfo(scoreInfo: IdcardScoreInfoResult): IdcardFrontResult {
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