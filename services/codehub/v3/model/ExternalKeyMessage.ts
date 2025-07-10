

export class ExternalKeyMessage {
    private 'external_key_message'?: string;
    private 'external_service'?: string;
    public constructor() { 
    }
    public withExternalKeyMessage(externalKeyMessage: string): ExternalKeyMessage {
        this['external_key_message'] = externalKeyMessage;
        return this;
    }
    public set externalKeyMessage(externalKeyMessage: string  | undefined) {
        this['external_key_message'] = externalKeyMessage;
    }
    public get externalKeyMessage(): string | undefined {
        return this['external_key_message'];
    }
    public withExternalService(externalService: string): ExternalKeyMessage {
        this['external_service'] = externalService;
        return this;
    }
    public set externalService(externalService: string  | undefined) {
        this['external_service'] = externalService;
    }
    public get externalService(): string | undefined {
        return this['external_service'];
    }
}