

export class DownloadMetadataRequest {
    private 'auth_config_id'?: string;
    public type?: DownloadMetadataRequestTypeEnum | string;
    public constructor(authConfigId?: string, type?: string) { 
        this['auth_config_id'] = authConfigId;
        this['type'] = type;
    }
    public withAuthConfigId(authConfigId: string): DownloadMetadataRequest {
        this['auth_config_id'] = authConfigId;
        return this;
    }
    public set authConfigId(authConfigId: string  | undefined) {
        this['auth_config_id'] = authConfigId;
    }
    public get authConfigId(): string | undefined {
        return this['auth_config_id'];
    }
    public withType(type: DownloadMetadataRequestTypeEnum | string): DownloadMetadataRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadMetadataRequestTypeEnum {
    IDP = 'IDP',
    SP = 'SP'
}
