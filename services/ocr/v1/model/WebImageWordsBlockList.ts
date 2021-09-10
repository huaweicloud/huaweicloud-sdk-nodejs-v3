

export class WebImageWordsBlockList {
    public words?: string;
    public confidence?: number;
    public location?: Array<Array<number>>;
    private 'extracted_data'?: object | undefined;
    private 'contact_info'?: object | undefined;
    private 'image_size'?: object | undefined;
    public height?: number;
    public width?: number;
    public name?: string;
    public phone?: string;
    public province?: string;
    public city?: string;
    public district?: string;
    private 'detail_address'?: string | undefined;
    public constructor() { 
    }
    public withWords(words: string): WebImageWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withConfidence(confidence: number): WebImageWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<Array<number>>): WebImageWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withExtractedData(extractedData: object): WebImageWordsBlockList {
        this['extracted_data'] = extractedData;
        return this;
    }
    public set extractedData(extractedData: object | undefined) {
        this['extracted_data'] = extractedData;
    }
    public get extractedData() {
        return this['extracted_data'];
    }
    public withContactInfo(contactInfo: object): WebImageWordsBlockList {
        this['contact_info'] = contactInfo;
        return this;
    }
    public set contactInfo(contactInfo: object | undefined) {
        this['contact_info'] = contactInfo;
    }
    public get contactInfo() {
        return this['contact_info'];
    }
    public withImageSize(imageSize: object): WebImageWordsBlockList {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: object | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize() {
        return this['image_size'];
    }
    public withHeight(height: number): WebImageWordsBlockList {
        this['height'] = height;
        return this;
    }
    public withWidth(width: number): WebImageWordsBlockList {
        this['width'] = width;
        return this;
    }
    public withName(name: string): WebImageWordsBlockList {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): WebImageWordsBlockList {
        this['phone'] = phone;
        return this;
    }
    public withProvince(province: string): WebImageWordsBlockList {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): WebImageWordsBlockList {
        this['city'] = city;
        return this;
    }
    public withDistrict(district: string): WebImageWordsBlockList {
        this['district'] = district;
        return this;
    }
    public withDetailAddress(detailAddress: string): WebImageWordsBlockList {
        this['detail_address'] = detailAddress;
        return this;
    }
    public set detailAddress(detailAddress: string | undefined) {
        this['detail_address'] = detailAddress;
    }
    public get detailAddress() {
        return this['detail_address'];
    }
}