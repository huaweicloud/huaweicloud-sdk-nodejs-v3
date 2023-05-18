

export class UpdateDisasterRecoveryReq {
    private 'dr_sync_period'?: string | undefined;
    private 'send_request'?: number | undefined;
    private 'primary_to_role'?: string | undefined;
    private 'reset_action'?: string | undefined;
    private 'standby_to_role'?: string | undefined;
    private 'dr_status'?: string | undefined;
    public constructor() { 
    }
    public withDrSyncPeriod(drSyncPeriod: string): UpdateDisasterRecoveryReq {
        this['dr_sync_period'] = drSyncPeriod;
        return this;
    }
    public set drSyncPeriod(drSyncPeriod: string | undefined) {
        this['dr_sync_period'] = drSyncPeriod;
    }
    public get drSyncPeriod() {
        return this['dr_sync_period'];
    }
    public withSendRequest(sendRequest: number): UpdateDisasterRecoveryReq {
        this['send_request'] = sendRequest;
        return this;
    }
    public set sendRequest(sendRequest: number | undefined) {
        this['send_request'] = sendRequest;
    }
    public get sendRequest() {
        return this['send_request'];
    }
    public withPrimaryToRole(primaryToRole: string): UpdateDisasterRecoveryReq {
        this['primary_to_role'] = primaryToRole;
        return this;
    }
    public set primaryToRole(primaryToRole: string | undefined) {
        this['primary_to_role'] = primaryToRole;
    }
    public get primaryToRole() {
        return this['primary_to_role'];
    }
    public withResetAction(resetAction: string): UpdateDisasterRecoveryReq {
        this['reset_action'] = resetAction;
        return this;
    }
    public set resetAction(resetAction: string | undefined) {
        this['reset_action'] = resetAction;
    }
    public get resetAction() {
        return this['reset_action'];
    }
    public withStandbyToRole(standbyToRole: string): UpdateDisasterRecoveryReq {
        this['standby_to_role'] = standbyToRole;
        return this;
    }
    public set standbyToRole(standbyToRole: string | undefined) {
        this['standby_to_role'] = standbyToRole;
    }
    public get standbyToRole() {
        return this['standby_to_role'];
    }
    public withDrStatus(drStatus: string): UpdateDisasterRecoveryReq {
        this['dr_status'] = drStatus;
        return this;
    }
    public set drStatus(drStatus: string | undefined) {
        this['dr_status'] = drStatus;
    }
    public get drStatus() {
        return this['dr_status'];
    }
}