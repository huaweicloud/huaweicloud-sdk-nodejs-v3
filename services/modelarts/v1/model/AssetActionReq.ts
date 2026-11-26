

export class AssetActionReq {
    private 'action_type'?: string;
    private 'action_dir'?: string;
    public constructor() { 
    }
    public withActionType(actionType: string): AssetActionReq {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
    public withActionDir(actionDir: string): AssetActionReq {
        this['action_dir'] = actionDir;
        return this;
    }
    public set actionDir(actionDir: string  | undefined) {
        this['action_dir'] = actionDir;
    }
    public get actionDir(): string | undefined {
        return this['action_dir'];
    }
}