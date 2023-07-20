

export class ModifyTuningParams {
    private 'full_sync'?: { [key: string]: string; };
    private 'incre_capture'?: { [key: string]: string; };
    private 'incre_apply'?: { [key: string]: string; };
    private 'incre_relay'?: { [key: string]: string; };
    public recovery?: boolean;
    public constructor(increCapture?: { [key: string]: string; }, increApply?: { [key: string]: string; }) { 
        this['incre_capture'] = increCapture;
        this['incre_apply'] = increApply;
    }
    public withFullSync(fullSync: { [key: string]: string; }): ModifyTuningParams {
        this['full_sync'] = fullSync;
        return this;
    }
    public set fullSync(fullSync: { [key: string]: string; }  | undefined) {
        this['full_sync'] = fullSync;
    }
    public get fullSync(): { [key: string]: string; } | undefined {
        return this['full_sync'];
    }
    public withIncreCapture(increCapture: { [key: string]: string; }): ModifyTuningParams {
        this['incre_capture'] = increCapture;
        return this;
    }
    public set increCapture(increCapture: { [key: string]: string; }  | undefined) {
        this['incre_capture'] = increCapture;
    }
    public get increCapture(): { [key: string]: string; } | undefined {
        return this['incre_capture'];
    }
    public withIncreApply(increApply: { [key: string]: string; }): ModifyTuningParams {
        this['incre_apply'] = increApply;
        return this;
    }
    public set increApply(increApply: { [key: string]: string; }  | undefined) {
        this['incre_apply'] = increApply;
    }
    public get increApply(): { [key: string]: string; } | undefined {
        return this['incre_apply'];
    }
    public withIncreRelay(increRelay: { [key: string]: string; }): ModifyTuningParams {
        this['incre_relay'] = increRelay;
        return this;
    }
    public set increRelay(increRelay: { [key: string]: string; }  | undefined) {
        this['incre_relay'] = increRelay;
    }
    public get increRelay(): { [key: string]: string; } | undefined {
        return this['incre_relay'];
    }
    public withRecovery(recovery: boolean): ModifyTuningParams {
        this['recovery'] = recovery;
        return this;
    }
}