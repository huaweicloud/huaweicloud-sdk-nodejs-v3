

export class UserProfile {
    private 'enable_retrieve'?: boolean;
    private 'enable_extract'?: boolean;
    public constructor() { 
    }
    public withEnableRetrieve(enableRetrieve: boolean): UserProfile {
        this['enable_retrieve'] = enableRetrieve;
        return this;
    }
    public set enableRetrieve(enableRetrieve: boolean  | undefined) {
        this['enable_retrieve'] = enableRetrieve;
    }
    public get enableRetrieve(): boolean | undefined {
        return this['enable_retrieve'];
    }
    public withEnableExtract(enableExtract: boolean): UserProfile {
        this['enable_extract'] = enableExtract;
        return this;
    }
    public set enableExtract(enableExtract: boolean  | undefined) {
        this['enable_extract'] = enableExtract;
    }
    public get enableExtract(): boolean | undefined {
        return this['enable_extract'];
    }
}