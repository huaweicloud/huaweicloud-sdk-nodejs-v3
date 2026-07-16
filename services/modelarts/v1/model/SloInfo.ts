import { SloObjectives } from './SloObjectives';


export class SloInfo {
    private 'slo_objectives'?: Array<SloObjectives>;
    private 'predict_window_seconds'?: number;
    public constructor(sloObjectives?: Array<SloObjectives>) { 
        this['slo_objectives'] = sloObjectives;
    }
    public withSloObjectives(sloObjectives: Array<SloObjectives>): SloInfo {
        this['slo_objectives'] = sloObjectives;
        return this;
    }
    public set sloObjectives(sloObjectives: Array<SloObjectives>  | undefined) {
        this['slo_objectives'] = sloObjectives;
    }
    public get sloObjectives(): Array<SloObjectives> | undefined {
        return this['slo_objectives'];
    }
    public withPredictWindowSeconds(predictWindowSeconds: number): SloInfo {
        this['predict_window_seconds'] = predictWindowSeconds;
        return this;
    }
    public set predictWindowSeconds(predictWindowSeconds: number  | undefined) {
        this['predict_window_seconds'] = predictWindowSeconds;
    }
    public get predictWindowSeconds(): number | undefined {
        return this['predict_window_seconds'];
    }
}