import { UpdateAuthConfigReq } from './UpdateAuthConfigReq';


export class UpdateAuthConfigRequest {
    private 'auth_config_id'?: string;
    public body?: UpdateAuthConfigReq;
    public constructor(authConfigId?: string) { 
        this['auth_config_id'] = authConfigId;
    }
    public withAuthConfigId(authConfigId: string): UpdateAuthConfigRequest {
        this['auth_config_id'] = authConfigId;
        return this;
    }
    public set authConfigId(authConfigId: string  | undefined) {
        this['auth_config_id'] = authConfigId;
    }
    public get authConfigId(): string | undefined {
        return this['auth_config_id'];
    }
    public withBody(body: UpdateAuthConfigReq): UpdateAuthConfigRequest {
        this['body'] = body;
        return this;
    }
}