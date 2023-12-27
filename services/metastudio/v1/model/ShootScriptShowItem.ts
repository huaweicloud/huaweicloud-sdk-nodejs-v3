import { ShootScriptDetail } from './ShootScriptDetail';
import { ShootScriptItemBaseInfo } from './ShootScriptItemBaseInfo';


export class ShootScriptShowItem {
    private 'sequence_no'?: number;
    private 'shoot_script'?: ShootScriptDetail;
    public constructor() { 
    }
    public withSequenceNo(sequenceNo: number): ShootScriptShowItem {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
    public withShootScript(shootScript: ShootScriptDetail): ShootScriptShowItem {
        this['shoot_script'] = shootScript;
        return this;
    }
    public set shootScript(shootScript: ShootScriptDetail  | undefined) {
        this['shoot_script'] = shootScript;
    }
    public get shootScript(): ShootScriptDetail | undefined {
        return this['shoot_script'];
    }
}