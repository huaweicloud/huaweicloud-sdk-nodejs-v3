

export class DisableControlOperateReqBody {
    public identifier?: string;
    private 'target_identifier'?: string;
    public constructor(identifier?: string, targetIdentifier?: string) { 
        this['identifier'] = identifier;
        this['target_identifier'] = targetIdentifier;
    }
    public withIdentifier(identifier: string): DisableControlOperateReqBody {
        this['identifier'] = identifier;
        return this;
    }
    public withTargetIdentifier(targetIdentifier: string): DisableControlOperateReqBody {
        this['target_identifier'] = targetIdentifier;
        return this;
    }
    public set targetIdentifier(targetIdentifier: string  | undefined) {
        this['target_identifier'] = targetIdentifier;
    }
    public get targetIdentifier(): string | undefined {
        return this['target_identifier'];
    }
}