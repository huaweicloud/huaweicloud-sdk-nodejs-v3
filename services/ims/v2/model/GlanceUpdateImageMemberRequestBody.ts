

export class GlanceUpdateImageMemberRequestBody {
    public status?: GlanceUpdateImageMemberRequestBodyStatusEnum | string;
    private 'vault_id'?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: GlanceUpdateImageMemberRequestBodyStatusEnum | string): GlanceUpdateImageMemberRequestBody {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): GlanceUpdateImageMemberRequestBody {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageMemberRequestBodyStatusEnum {
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
}
