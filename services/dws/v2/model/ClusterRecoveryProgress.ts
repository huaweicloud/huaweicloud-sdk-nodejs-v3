

export class ClusterRecoveryProgress {
    public key?: string;
    private 'action_type'?: string | undefined;
    private 'unrestore_keys'?: string | undefined;
    private 'action_start_time'?: string | undefined;
    private 'action_end_time'?: string | undefined;
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
    public set actionType(actionType: string | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType() {
        return this['action_type'];
    }
    public withUnrestoreKeys(unrestoreKeys: string): ClusterRecoveryProgress {
        this['unrestore_keys'] = unrestoreKeys;
        return this;
    }
    public set unrestoreKeys(unrestoreKeys: string | undefined) {
        this['unrestore_keys'] = unrestoreKeys;
    }
    public get unrestoreKeys() {
        return this['unrestore_keys'];
    }
    public withActionStartTime(actionStartTime: string): ClusterRecoveryProgress {
        this['action_start_time'] = actionStartTime;
        return this;
    }
    public set actionStartTime(actionStartTime: string | undefined) {
        this['action_start_time'] = actionStartTime;
    }
    public get actionStartTime() {
        return this['action_start_time'];
    }
    public withActionEndTime(actionEndTime: string): ClusterRecoveryProgress {
        this['action_end_time'] = actionEndTime;
        return this;
    }
    public set actionEndTime(actionEndTime: string | undefined) {
        this['action_end_time'] = actionEndTime;
    }
    public get actionEndTime() {
        return this['action_end_time'];
    }
}