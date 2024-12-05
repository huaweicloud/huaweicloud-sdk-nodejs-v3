import { BindingGeipBody } from './BindingGeipBody';


export class CreateBindingGeipRequestBody {
    private 'gcb_id'?: string;
    private 'global_eips'?: Array<BindingGeipBody>;
    public constructor() { 
    }
    public withGcbId(gcbId: string): CreateBindingGeipRequestBody {
        this['gcb_id'] = gcbId;
        return this;
    }
    public set gcbId(gcbId: string  | undefined) {
        this['gcb_id'] = gcbId;
    }
    public get gcbId(): string | undefined {
        return this['gcb_id'];
    }
    public withGlobalEips(globalEips: Array<BindingGeipBody>): CreateBindingGeipRequestBody {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<BindingGeipBody>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<BindingGeipBody> | undefined {
        return this['global_eips'];
    }
}