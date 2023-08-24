

export class CbcOperationLock {
    private 'lock_scene'?: CbcOperationLockLockSceneEnum | string;
    private 'lock_source_id'?: string;
    public constructor() { 
    }
    public withLockScene(lockScene: CbcOperationLockLockSceneEnum | string): CbcOperationLock {
        this['lock_scene'] = lockScene;
        return this;
    }
    public set lockScene(lockScene: CbcOperationLockLockSceneEnum | string  | undefined) {
        this['lock_scene'] = lockScene;
    }
    public get lockScene(): CbcOperationLockLockSceneEnum | string | undefined {
        return this['lock_scene'];
    }
    public withLockSourceId(lockSourceId: string): CbcOperationLock {
        this['lock_source_id'] = lockSourceId;
        return this;
    }
    public set lockSourceId(lockSourceId: string  | undefined) {
        this['lock_source_id'] = lockSourceId;
    }
    public get lockSourceId(): string | undefined {
        return this['lock_source_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CbcOperationLockLockSceneEnum {
    TO_PERIOD_LOCK = 'TO_PERIOD_LOCK',
    PEC_CHG_LOCK = 'PEC_CHG_LOCK'
}
