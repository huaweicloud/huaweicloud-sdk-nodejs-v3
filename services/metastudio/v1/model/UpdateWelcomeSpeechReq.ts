

export class UpdateWelcomeSpeechReq {
    private 'welcome_speech'?: string;
    private 'enable_welcome_speech'?: boolean;
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
    public withEnableWelcomeSpeech(enableWelcomeSpeech: boolean): UpdateWelcomeSpeechReq {
        this['enable_welcome_speech'] = enableWelcomeSpeech;
        return this;
    }
    public set enableWelcomeSpeech(enableWelcomeSpeech: boolean  | undefined) {
        this['enable_welcome_speech'] = enableWelcomeSpeech;
    }
    public get enableWelcomeSpeech(): boolean | undefined {
        return this['enable_welcome_speech'];
    }
}