

export class AnalysisInfoResult {
    public role?: string;
    public emotion?: string;
    public speed?: number;
    public constructor() { 
    }
    public withRole(role: string): AnalysisInfoResult {
        this['role'] = role;
        return this;
    }
    public withEmotion(emotion: string): AnalysisInfoResult {
        this['emotion'] = emotion;
        return this;
    }
    public withSpeed(speed: number): AnalysisInfoResult {
        this['speed'] = speed;
        return this;
    }
}