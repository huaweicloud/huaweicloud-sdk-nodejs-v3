

export class AuditResultSystemAuditResultErrors {
    private 'audio_name'?: string;
    private 'text_name'?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withAudioName(audioName: string): AuditResultSystemAuditResultErrors {
        this['audio_name'] = audioName;
        return this;
    }
    public set audioName(audioName: string  | undefined) {
        this['audio_name'] = audioName;
    }
    public get audioName(): string | undefined {
        return this['audio_name'];
    }
    public withTextName(textName: string): AuditResultSystemAuditResultErrors {
        this['text_name'] = textName;
        return this;
    }
    public set textName(textName: string  | undefined) {
        this['text_name'] = textName;
    }
    public get textName(): string | undefined {
        return this['text_name'];
    }
    public withErrorCode(errorCode: string): AuditResultSystemAuditResultErrors {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): AuditResultSystemAuditResultErrors {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}