import { InputSetting } from './InputSetting';
import { MixInfoLayout } from './MixInfoLayout';


export class MixInfo {
    public inputs?: Array<InputSetting>;
    public layout?: MixInfoLayout;
    public constructor() { 
    }
    public withInputs(inputs: Array<InputSetting>): MixInfo {
        this['inputs'] = inputs;
        return this;
    }
    public withLayout(layout: MixInfoLayout): MixInfo {
        this['layout'] = layout;
        return this;
    }
}