

export class AssociateAliasRequestBody {
    public alias?: string;
    private 'target_key_id'?: string;
    public constructor(alias?: string, targetKeyId?: string) { 
        this['alias'] = alias;
        this['target_key_id'] = targetKeyId;
    }
    public withAlias(alias: string): AssociateAliasRequestBody {
        this['alias'] = alias;
        return this;
    }
    public withTargetKeyId(targetKeyId: string): AssociateAliasRequestBody {
        this['target_key_id'] = targetKeyId;
        return this;
    }
    public set targetKeyId(targetKeyId: string  | undefined) {
        this['target_key_id'] = targetKeyId;
    }
    public get targetKeyId(): string | undefined {
        return this['target_key_id'];
    }
}