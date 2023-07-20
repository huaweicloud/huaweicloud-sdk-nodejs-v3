

export class ProtectableAgentStatus {
    public code?: number;
    public installed?: boolean;
    private 'is_old'?: boolean;
    public message?: string;
    private 'resource_id'?: string;
    public version?: string;
    public constructor() { 
    }
    public withCode(code: number): ProtectableAgentStatus {
        this['code'] = code;
        return this;
    }
    public withInstalled(installed: boolean): ProtectableAgentStatus {
        this['installed'] = installed;
        return this;
    }
    public withIsOld(isOld: boolean): ProtectableAgentStatus {
        this['is_old'] = isOld;
        return this;
    }
    public set isOld(isOld: boolean  | undefined) {
        this['is_old'] = isOld;
    }
    public get isOld(): boolean | undefined {
        return this['is_old'];
    }
    public withMessage(message: string): ProtectableAgentStatus {
        this['message'] = message;
        return this;
    }
    public withResourceId(resourceId: string): ProtectableAgentStatus {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withVersion(version: string): ProtectableAgentStatus {
        this['version'] = version;
        return this;
    }
}