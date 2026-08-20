

export class CreateTempApiKeyReq {
    private 'expire_time'?: number;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withExpireTime(expireTime: number): CreateTempApiKeyReq {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withWorkspaceId(workspaceId: string): CreateTempApiKeyReq {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}