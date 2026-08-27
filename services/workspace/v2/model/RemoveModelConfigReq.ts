import { ModelConfigItem } from './ModelConfigItem';


export class RemoveModelConfigReq {
    public items?: Array<ModelConfigItem>;
    public constructor(items?: Array<ModelConfigItem>) { 
        this['items'] = items;
    }
    public withItems(items: Array<ModelConfigItem>): RemoveModelConfigReq {
        this['items'] = items;
        return this;
    }
}