

export class CreateIpRequestBody {
    public type?: string;
    private 'target_id'?: string;
    public password?: string;
    public constructor(type?: string, password?: string) { 
        this['type'] = type;
        this['password'] = password;
    }
    public withType(type: string): CreateIpRequestBody {
        this['type'] = type;
        return this;
    }
    public withTargetId(targetId: string): CreateIpRequestBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withPassword(password: string): CreateIpRequestBody {
        this['password'] = password;
        return this;
    }
}