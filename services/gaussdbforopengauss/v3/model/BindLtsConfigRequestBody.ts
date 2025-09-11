import { InstanceSaveLtsConfigOption } from './InstanceSaveLtsConfigOption';


export class BindLtsConfigRequestBody {
    public list?: Array<InstanceSaveLtsConfigOption>;
    public constructor(list?: Array<InstanceSaveLtsConfigOption>) { 
        this['list'] = list;
    }
    public withList(list: Array<InstanceSaveLtsConfigOption>): BindLtsConfigRequestBody {
        this['list'] = list;
        return this;
    }
}