

export class GeneralTextRequestBody {
    public image?: string;
    public url?: string;
    private 'detect_direction'?: boolean | undefined;
    private 'quick_mode'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): GeneralTextRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): GeneralTextRequestBody {
        this['url'] = url;
        return this;
    }
    public withDetectDirection(detectDirection: boolean): GeneralTextRequestBody {
        this['detect_direction'] = detectDirection;
        return this;
    }
    public set detectDirection(detectDirection: boolean | undefined) {
        this['detect_direction'] = detectDirection;
    }
    public get detectDirection() {
        return this['detect_direction'];
    }
    public withQuickMode(quickMode: boolean): GeneralTextRequestBody {
        this['quick_mode'] = quickMode;
        return this;
    }
    public set quickMode(quickMode: boolean | undefined) {
        this['quick_mode'] = quickMode;
    }
    public get quickMode() {
        return this['quick_mode'];
    }
}