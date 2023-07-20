import { TranscodeSpec } from './TranscodeSpec';


export class TranscodeData {
    private 'spec_list'?: Array<TranscodeSpec>;
    public time?: string;
    public constructor() { 
    }
    public withSpecList(specList: Array<TranscodeSpec>): TranscodeData {
        this['spec_list'] = specList;
        return this;
    }
    public set specList(specList: Array<TranscodeSpec>  | undefined) {
        this['spec_list'] = specList;
    }
    public get specList(): Array<TranscodeSpec> | undefined {
        return this['spec_list'];
    }
    public withTime(time: string): TranscodeData {
        this['time'] = time;
        return this;
    }
}