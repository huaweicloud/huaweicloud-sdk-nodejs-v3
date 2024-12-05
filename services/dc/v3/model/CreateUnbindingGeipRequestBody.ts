import { UnbindingGeipBody } from './UnbindingGeipBody';


export class CreateUnbindingGeipRequestBody {
    private 'global_eips'?: Array<UnbindingGeipBody>;
    public constructor() { 
    }
    public withGlobalEips(globalEips: Array<UnbindingGeipBody>): CreateUnbindingGeipRequestBody {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<UnbindingGeipBody>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<UnbindingGeipBody> | undefined {
        return this['global_eips'];
    }
}