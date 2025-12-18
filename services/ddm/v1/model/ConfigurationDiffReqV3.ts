import { ParaGroupDiff } from './ParaGroupDiff';


export class ConfigurationDiffReqV3 {
    private 'diff_para'?: ParaGroupDiff;
    public constructor() { 
    }
    public withDiffPara(diffPara: ParaGroupDiff): ConfigurationDiffReqV3 {
        this['diff_para'] = diffPara;
        return this;
    }
    public set diffPara(diffPara: ParaGroupDiff  | undefined) {
        this['diff_para'] = diffPara;
    }
    public get diffPara(): ParaGroupDiff | undefined {
        return this['diff_para'];
    }
}