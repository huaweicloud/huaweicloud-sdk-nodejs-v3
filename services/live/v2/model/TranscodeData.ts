import { TranscodeSpec } from './TranscodeSpec';


export class TranscodeData {
    private 'spec_list'?: Array<TranscodeSpec> | undefined;
    public time?: string;
    public constructor() { 
    }
    public withSpecList(specList: Array<TranscodeSpec>): TranscodeData {
        this['spec_list'] = specList;
        return this;
    }
    public set specList(specList: Array<TranscodeSpec> | undefined) {
        this['spec_list'] = specList;
    }
    public get specList() {
        return this['spec_list'];
    }
    public withTime(time: string): TranscodeData {
        this['time'] = time;
        return this;
    }
}