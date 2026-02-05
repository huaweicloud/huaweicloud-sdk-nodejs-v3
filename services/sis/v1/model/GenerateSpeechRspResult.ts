

export class GenerateSpeechRspResult {
    public data?: string;
    public constructor() { 
    }
    public withData(data: string): GenerateSpeechRspResult {
        this['data'] = data;
        return this;
    }
}