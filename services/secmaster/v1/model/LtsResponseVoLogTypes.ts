

export class LtsResponseVoLogTypes {
    private 'secm_lts_'?: Array<string>;
    public constructor() { 
    }
    public withSecmLts(secmLts: Array<string>): LtsResponseVoLogTypes {
        this['secm_lts_'] = secmLts;
        return this;
    }
    public set secmLts(secmLts: Array<string>  | undefined) {
        this['secm_lts_'] = secmLts;
    }
    public get secmLts(): Array<string> | undefined {
        return this['secm_lts_'];
    }
}