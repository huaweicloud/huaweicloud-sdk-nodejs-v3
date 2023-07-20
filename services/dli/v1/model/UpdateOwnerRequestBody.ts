

export class UpdateOwnerRequestBody {
    private 'new_owner'?: string;
    public constructor(newOwner?: string) { 
        this['new_owner'] = newOwner;
    }
    public withNewOwner(newOwner: string): UpdateOwnerRequestBody {
        this['new_owner'] = newOwner;
        return this;
    }
    public set newOwner(newOwner: string  | undefined) {
        this['new_owner'] = newOwner;
    }
    public get newOwner(): string | undefined {
        return this['new_owner'];
    }
}