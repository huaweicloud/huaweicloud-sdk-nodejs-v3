

export class ClusterRecoveryProgress {
    public key?: string;
    private 'action_type'?: string;
    private 'unrestore_keys'?: string;
    private 'action_start_time'?: string;
    private 'action_end_time'?: string;
    public constructor() { 
    }
    public withKey(key: string): ClusterRecoveryProgress {
        this['key'] = key;
        return this;
    }
    public withActionType(actionType: string): ClusterRecoveryProgress {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
    public withUnrestoreKeys(unrestoreKeys: string): ClusterRecoveryProgress {
        this['unrestore_keys'] = unrestoreKeys;
        return this;
    }
    public set unrestoreKeys(unrestoreKeys: string  | undefined) {
        this['unrestore_keys'] = unrestoreKeys;
    }
    public get unrestoreKeys(): string | undefined {
        return this['unrestore_keys'];
    }
    public withActionStartTime(actionStartTime: string): ClusterRecoveryProgress {
        this['action_start_time'] = actionStartTime;
        return this;
    }
    public set actionStartTime(actionStartTime: string  | undefined) {
        this['action_start_time'] = actionStartTime;
    }
    public get actionStartTime(): string | undefined {
        return this['action_start_time'];
    }
    public withActionEndTime(actionEndTime: string): ClusterRecoveryProgress {
        this['action_end_time'] = actionEndTime;
        return this;
    }
    public set actionEndTime(actionEndTime: string  | undefined) {
        this['action_end_time'] = actionEndTime;
    }
    public get actionEndTime(): string | undefined {
        return this['action_end_time'];
    }
}