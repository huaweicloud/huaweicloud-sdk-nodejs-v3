

export class LiveDetectFaceRespResult {
    public alive?: boolean;
    public confidence?: number;
    public picture?: string;
    public constructor() { 
    }
    public withAlive(alive: boolean): LiveDetectFaceRespResult {
        this['alive'] = alive;
        return this;
    }
    public withConfidence(confidence: number): LiveDetectFaceRespResult {
        this['confidence'] = confidence;
        return this;
    }
    public withPicture(picture: string): LiveDetectFaceRespResult {
        this['picture'] = picture;
        return this;
    }
}