

export class ImagePwdComplexityInfoResponseInfo {
    private 'image_id'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    private 'latest_scan_time'?: number;
    private 'min_length'?: boolean;
    private 'uppercase_letter'?: boolean;
    private 'lowercase_letter'?: boolean;
    private 'number'?: boolean;
    private 'special_character'?: boolean;
    public suggestion?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): ImagePwdComplexityInfoResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withNamespace(namespace: string): ImagePwdComplexityInfoResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ImagePwdComplexityInfoResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ImagePwdComplexityInfoResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): ImagePwdComplexityInfoResponseInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withLatestScanTime(latestScanTime: number): ImagePwdComplexityInfoResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withMinLength(minLength: boolean): ImagePwdComplexityInfoResponseInfo {
        this['min_length'] = minLength;
        return this;
    }
    public set minLength(minLength: boolean  | undefined) {
        this['min_length'] = minLength;
    }
    public get minLength(): boolean | undefined {
        return this['min_length'];
    }
    public withUppercaseLetter(uppercaseLetter: boolean): ImagePwdComplexityInfoResponseInfo {
        this['uppercase_letter'] = uppercaseLetter;
        return this;
    }
    public set uppercaseLetter(uppercaseLetter: boolean  | undefined) {
        this['uppercase_letter'] = uppercaseLetter;
    }
    public get uppercaseLetter(): boolean | undefined {
        return this['uppercase_letter'];
    }
    public withLowercaseLetter(lowercaseLetter: boolean): ImagePwdComplexityInfoResponseInfo {
        this['lowercase_letter'] = lowercaseLetter;
        return this;
    }
    public set lowercaseLetter(lowercaseLetter: boolean  | undefined) {
        this['lowercase_letter'] = lowercaseLetter;
    }
    public get lowercaseLetter(): boolean | undefined {
        return this['lowercase_letter'];
    }
    public withModelNumber(modelNumber: boolean): ImagePwdComplexityInfoResponseInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: boolean  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): boolean | undefined {
        return this['number'];
    }
    public withSpecialCharacter(specialCharacter: boolean): ImagePwdComplexityInfoResponseInfo {
        this['special_character'] = specialCharacter;
        return this;
    }
    public set specialCharacter(specialCharacter: boolean  | undefined) {
        this['special_character'] = specialCharacter;
    }
    public get specialCharacter(): boolean | undefined {
        return this['special_character'];
    }
    public withSuggestion(suggestion: string): ImagePwdComplexityInfoResponseInfo {
        this['suggestion'] = suggestion;
        return this;
    }
}