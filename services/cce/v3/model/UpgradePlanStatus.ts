

export class UpgradePlanStatus {
    public phase?: UpgradePlanStatusPhaseEnum | string;
    public constructor(phase?: string) { 
        this['phase'] = phase;
    }
    public withPhase(phase: UpgradePlanStatusPhaseEnum | string): UpgradePlanStatus {
        this['phase'] = phase;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradePlanStatusPhaseEnum {
    PENDING = 'Pending',
    ENQUEUED = 'Enqueued',
    UPGRADING = 'Upgrading',
    SUCCESS = 'Success',
    FAILED = 'Failed',
    SKIPPED = 'Skipped'
}
