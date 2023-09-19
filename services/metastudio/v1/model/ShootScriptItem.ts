import { ShootScript } from './ShootScript';


export class ShootScriptItem {
    private 'sequence_no'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'shoot_script'?: ShootScript;
    public constructor(shootScript?: ShootScript) { 
        this['shoot_script'] = shootScript;
    }
    public withSequenceNo(sequenceNo: number): ShootScriptItem {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
    public withStartTime(startTime: number): ShootScriptItem {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShootScriptItem {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withShootScript(shootScript: ShootScript): ShootScriptItem {
        this['shoot_script'] = shootScript;
        return this;
    }
    public set shootScript(shootScript: ShootScript  | undefined) {
        this['shoot_script'] = shootScript;
    }
    public get shootScript(): ShootScript | undefined {
        return this['shoot_script'];
    }
}