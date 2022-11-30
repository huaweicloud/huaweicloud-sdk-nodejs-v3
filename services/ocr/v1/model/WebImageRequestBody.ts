

export class WebImageRequestBody {
    public image?: string;
    public url?: string;
    private 'detect_direction'?: boolean | undefined;
    private 'extract_type'?: Array<string> | undefined;
    private 'detect_font'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): WebImageRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): WebImageRequestBody {
        this['url'] = url;
        return this;
    }
    public withDetectDirection(detectDirection: boolean): WebImageRequestBody {
        this['detect_direction'] = detectDirection;
        return this;
    }
    public set detectDirection(detectDirection: boolean | undefined) {
        this['detect_direction'] = detectDirection;
    }
    public get detectDirection() {
        return this['detect_direction'];
    }
    public withExtractType(extractType: Array<string>): WebImageRequestBody {
        this['extract_type'] = extractType;
        return this;
    }
    public set extractType(extractType: Array<string> | undefined) {
        this['extract_type'] = extractType;
    }
    public get extractType() {
        return this['extract_type'];
    }
    public withDetectFont(detectFont: boolean): WebImageRequestBody {
        this['detect_font'] = detectFont;
        return this;
    }
    public set detectFont(detectFont: boolean | undefined) {
        this['detect_font'] = detectFont;
    }
    public get detectFont() {
        return this['detect_font'];
    }
}