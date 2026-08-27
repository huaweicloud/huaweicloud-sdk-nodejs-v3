import { ModelConfigItem } from './ModelConfigItem';


export class ApplyModelConfigReq {
    public items?: Array<ModelConfigItem>;
    public constructor(items?: Array<ModelConfigItem>) { 
        this['items'] = items;
    }
    public withItems(items: Array<ModelConfigItem>): ApplyModelConfigReq {
        this['items'] = items;
        return this;
    }
}