import { IdcardBackResult } from './IdcardBackResult';
import { IdcardFrontResult } from './IdcardFrontResult';
import { IdcardScoreInfoResult } from './IdcardScoreInfoResult';
import { IdcardVerificationResult } from './IdcardVerificationResult';


export class IdCardResult {
    public name?: string;
    public sex?: string;
    public birth?: string;
    public ethnicity?: string;
    public address?: string;
    private 'number'?: string;
    public issue?: string;
    private 'valid_from'?: string;
    private 'valid_to'?: string;
    private 'verification_result'?: IdcardVerificationResult;
    private 'text_location'?: object;
    private 'portrait_image'?: string;
    private 'adjusted_image'?: string;
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
    public front?: IdcardFrontResult;
    public back?: IdcardBackResult;
    public constructor() { 
    }
    public withName(name: string): IdCardResult {
        this['name'] = name;
        return this;
    }
    public withSex(sex: string): IdCardResult {
        this['sex'] = sex;
        return this;
    }
    public withBirth(birth: string): IdCardResult {
        this['birth'] = birth;
        return this;
    }
    public withEthnicity(ethnicity: string): IdCardResult {
        this['ethnicity'] = ethnicity;
        return this;
    }
    public withAddress(address: string): IdCardResult {
        this['address'] = address;
        return this;
    }
    public withModelNumber(modelNumber: string): IdCardResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIssue(issue: string): IdCardResult {
        this['issue'] = issue;
        return this;
    }
    public withValidFrom(validFrom: string): IdCardResult {
        this['valid_from'] = validFrom;
        return this;
    }
    public set validFrom(validFrom: string  | undefined) {
        this['valid_from'] = validFrom;
    }
    public get validFrom(): string | undefined {
        return this['valid_from'];
    }
    public withValidTo(validTo: string): IdCardResult {
        this['valid_to'] = validTo;
        return this;
    }
    public set validTo(validTo: string  | undefined) {
        this['valid_to'] = validTo;
    }
    public get validTo(): string | undefined {
        return this['valid_to'];
    }
    public withVerificationResult(verificationResult: IdcardVerificationResult): IdCardResult {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: IdcardVerificationResult  | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult(): IdcardVerificationResult | undefined {
        return this['verification_result'];
    }
    public withTextLocation(textLocation: object): IdCardResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
    public withPortraitImage(portraitImage: string): IdCardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withAdjustedImage(adjustedImage: string): IdCardResult {
        this['adjusted_image'] = adjustedImage;
        return this;
    }
    public set adjustedImage(adjustedImage: string  | undefined) {
        this['adjusted_image'] = adjustedImage;
    }
    public get adjustedImage(): string | undefined {
        return this['adjusted_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): IdCardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withDetectReproduceResult(detectReproduceResult: boolean): IdCardResult {
        this['detect_reproduce_result'] = detectReproduceResult;
        return this;
    }
    public set detectReproduceResult(detectReproduceResult: boolean  | undefined) {
        this['detect_reproduce_result'] = detectReproduceResult;
    }
    public get detectReproduceResult(): boolean | undefined {
        return this['detect_reproduce_result'];
    }
    public withDetectCopyResult(detectCopyResult: boolean): IdCardResult {
        this['detect_copy_result'] = detectCopyResult;
        return this;
    }
    public set detectCopyResult(detectCopyResult: boolean  | undefined) {
        this['detect_copy_result'] = detectCopyResult;
    }
    public get detectCopyResult(): boolean | undefined {
        return this['detect_copy_result'];
    }
    public withDetectTamperingResult(detectTamperingResult: boolean): IdCardResult {
        this['detect_tampering_result'] = detectTamperingResult;
        return this;
    }
    public set detectTamperingResult(detectTamperingResult: boolean  | undefined) {
        this['detect_tampering_result'] = detectTamperingResult;
    }
    public get detectTamperingResult(): boolean | undefined {
        return this['detect_tampering_result'];
    }
    public withDetectBorderIntegrityResult(detectBorderIntegrityResult: boolean): IdCardResult {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
        return this;
    }
    public set detectBorderIntegrityResult(detectBorderIntegrityResult: boolean  | undefined) {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
    }
    public get detectBorderIntegrityResult(): boolean | undefined {
        return this['detect_border_integrity_result'];
    }
    public withDetectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean): IdCardResult {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
        return this;
    }
    public set detectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean  | undefined) {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
    }
    public get detectBlockingWithinBorderResult(): boolean | undefined {
        return this['detect_blocking_within_border_result'];
    }
    public withDetectBlurResult(detectBlurResult: boolean): IdCardResult {
        this['detect_blur_result'] = detectBlurResult;
        return this;
    }
    public set detectBlurResult(detectBlurResult: boolean  | undefined) {
        this['detect_blur_result'] = detectBlurResult;
    }
    public get detectBlurResult(): boolean | undefined {
        return this['detect_blur_result'];
    }
    public withDetectInterimResult(detectInterimResult: boolean): IdCardResult {
        this['detect_interim_result'] = detectInterimResult;
        return this;
    }
    public set detectInterimResult(detectInterimResult: boolean  | undefined) {
        this['detect_interim_result'] = detectInterimResult;
    }
    public get detectInterimResult(): boolean | undefined {
        return this['detect_interim_result'];
    }
    public withDetectGlareResult(detectGlareResult: boolean): IdCardResult {
        this['detect_glare_result'] = detectGlareResult;
        return this;
    }
    public set detectGlareResult(detectGlareResult: boolean  | undefined) {
        this['detect_glare_result'] = detectGlareResult;
    }
    public get detectGlareResult(): boolean | undefined {
        return this['detect_glare_result'];
    }
    public withScoreInfo(scoreInfo: IdcardScoreInfoResult): IdCardResult {
        this['score_info'] = scoreInfo;
        return this;
    }
    public set scoreInfo(scoreInfo: IdcardScoreInfoResult  | undefined) {
        this['score_info'] = scoreInfo;
    }
    public get scoreInfo(): IdcardScoreInfoResult | undefined {
        return this['score_info'];
    }
    public withFront(front: IdcardFrontResult): IdCardResult {
        this['front'] = front;
        return this;
    }
    public withBack(back: IdcardBackResult): IdCardResult {
        this['back'] = back;
        return this;
    }
}