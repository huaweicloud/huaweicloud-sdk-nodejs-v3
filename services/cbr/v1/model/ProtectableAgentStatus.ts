

export class ProtectableAgentStatus {
    public code?: number;
    public installed?: boolean;
    private 'is_old'?: boolean | undefined;
    public message?: string;
    private 'resource_id'?: string | undefined;
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
    public set isOld(isOld: boolean | undefined) {
        this['is_old'] = isOld;
    }
    public get isOld() {
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
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withVersion(version: string): ProtectableAgentStatus {
        this['version'] = version;
        return this;
    }
}