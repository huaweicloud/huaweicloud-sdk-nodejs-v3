

export class UpdateWelcomeSpeechReq {
    private 'welcome_speech'?: string;
    public constructor() { 
    }
    public withWelcomeSpeech(welcomeSpeech: string): UpdateWelcomeSpeechReq {
        this['welcome_speech'] = welcomeSpeech;
        return this;
    }
    public set welcomeSpeech(welcomeSpeech: string  | undefined) {
        this['welcome_speech'] = welcomeSpeech;
    }
    public get welcomeSpeech(): string | undefined {
        return this['welcome_speech'];
    }
}