import { TuningParameter } from './TuningParameter';


export class TuningParamInfo {
    private 'full_sync'?: Array<TuningParameter>;
    private 'incre_capture'?: Array<TuningParameter>;
    private 'incre_apply'?: Array<TuningParameter>;
    private 'incre_relay'?: Array<TuningParameter>;
    public constructor(fullSync?: Array<TuningParameter>, increCapture?: Array<TuningParameter>, increApply?: Array<TuningParameter>, increRelay?: Array<TuningParameter>) { 
        this['full_sync'] = fullSync;
        this['incre_capture'] = increCapture;
        this['incre_apply'] = increApply;
        this['incre_relay'] = increRelay;
    }
    public withFullSync(fullSync: Array<TuningParameter>): TuningParamInfo {
        this['full_sync'] = fullSync;
        return this;
    }
    public set fullSync(fullSync: Array<TuningParameter>  | undefined) {
        this['full_sync'] = fullSync;
    }
    public get fullSync(): Array<TuningParameter> | undefined {
        return this['full_sync'];
    }
    public withIncreCapture(increCapture: Array<TuningParameter>): TuningParamInfo {
        this['incre_capture'] = increCapture;
        return this;
    }
    public set increCapture(increCapture: Array<TuningParameter>  | undefined) {
        this['incre_capture'] = increCapture;
    }
    public get increCapture(): Array<TuningParameter> | undefined {
        return this['incre_capture'];
    }
    public withIncreApply(increApply: Array<TuningParameter>): TuningParamInfo {
        this['incre_apply'] = increApply;
        return this;
    }
    public set increApply(increApply: Array<TuningParameter>  | undefined) {
        this['incre_apply'] = increApply;
    }
    public get increApply(): Array<TuningParameter> | undefined {
        return this['incre_apply'];
    }
    public withIncreRelay(increRelay: Array<TuningParameter>): TuningParamInfo {
        this['incre_relay'] = increRelay;
        return this;
    }
    public set increRelay(increRelay: Array<TuningParameter>  | undefined) {
        this['incre_relay'] = increRelay;
    }
    public get increRelay(): Array<TuningParameter> | undefined {
        return this['incre_relay'];
    }
}