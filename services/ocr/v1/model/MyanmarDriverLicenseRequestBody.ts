

export class MyanmarDriverLicenseRequestBody {
    public image?: string;
    public url?: string;
    private 'convert_unicode'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): MyanmarDriverLicenseRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): MyanmarDriverLicenseRequestBody {
        this['url'] = url;
        return this;
    }
    public withConvertUnicode(convertUnicode: boolean): MyanmarDriverLicenseRequestBody {
        this['convert_unicode'] = convertUnicode;
        return this;
    }
    public set convertUnicode(convertUnicode: boolean  | undefined) {
        this['convert_unicode'] = convertUnicode;
    }
    public get convertUnicode(): boolean | undefined {
        return this['convert_unicode'];
    }
}