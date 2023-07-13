

export class DeleteSecretForScheduleRequestBody {
    private 'recovery_window_in_days': number | undefined;
    public constructor(recoveryWindowInDays?: any) { 
        this['recovery_window_in_days'] = recoveryWindowInDays;
    }
    public withRecoveryWindowInDays(recoveryWindowInDays: number): DeleteSecretForScheduleRequestBody {
        this['recovery_window_in_days'] = recoveryWindowInDays;
        return this;
    }
    public set recoveryWindowInDays(recoveryWindowInDays: number | undefined) {
        this['recovery_window_in_days'] = recoveryWindowInDays;
    }
    public get recoveryWindowInDays() {
        return this['recovery_window_in_days'];
    }
}