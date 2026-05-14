import { EditInput } from './EditInput';
import { VodEditingSetting } from './VodEditingSetting';


export class CreateAssetEditTaskReq {
    public inputs?: Array<EditInput>;
    private 'editing_settings'?: VodEditingSetting;
    public constructor(inputs?: Array<EditInput>) { 
        this['inputs'] = inputs;
    }
    public withInputs(inputs: Array<EditInput>): CreateAssetEditTaskReq {
        this['inputs'] = inputs;
        return this;
    }
    public withEditingSettings(editingSettings: VodEditingSetting): CreateAssetEditTaskReq {
        this['editing_settings'] = editingSettings;
        return this;
    }
    public set editingSettings(editingSettings: VodEditingSetting  | undefined) {
        this['editing_settings'] = editingSettings;
    }
    public get editingSettings(): VodEditingSetting | undefined {
        return this['editing_settings'];
    }
}