

export class UpgradeDbVersionFinalConfirmRequestBody {
    public action?: string;
    private 'force_rollback'?: boolean;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UpgradeDbVersionFinalConfirmRequestBody {
        this['action'] = action;
        return this;
    }
    public withForceRollback(forceRollback: boolean): UpgradeDbVersionFinalConfirmRequestBody {
        this['force_rollback'] = forceRollback;
        return this;
    }
    public set forceRollback(forceRollback: boolean  | undefined) {
        this['force_rollback'] = forceRollback;
    }
    public get forceRollback(): boolean | undefined {
        return this['force_rollback'];
    }
}