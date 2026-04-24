

export class ShowAssistAuthConfigRequest {
    private 'main_auth_config_id'?: string;
    public constructor() { 
    }
    public withMainAuthConfigId(mainAuthConfigId: string): ShowAssistAuthConfigRequest {
        this['main_auth_config_id'] = mainAuthConfigId;
        return this;
    }
    public set mainAuthConfigId(mainAuthConfigId: string  | undefined) {
        this['main_auth_config_id'] = mainAuthConfigId;
    }
    public get mainAuthConfigId(): string | undefined {
        return this['main_auth_config_id'];
    }
}