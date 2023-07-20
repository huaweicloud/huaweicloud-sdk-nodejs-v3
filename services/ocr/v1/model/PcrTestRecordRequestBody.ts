

export class PcrTestRecordRequestBody {
    public image?: string;
    public url?: string;
    private 'detect_direction'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): PcrTestRecordRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): PcrTestRecordRequestBody {
        this['url'] = url;
        return this;
    }
    public withDetectDirection(detectDirection: boolean): PcrTestRecordRequestBody {
        this['detect_direction'] = detectDirection;
        return this;
    }
    public set detectDirection(detectDirection: boolean  | undefined) {
        this['detect_direction'] = detectDirection;
    }
    public get detectDirection(): boolean | undefined {
        return this['detect_direction'];
    }
}