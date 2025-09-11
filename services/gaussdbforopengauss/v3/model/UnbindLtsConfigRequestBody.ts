import { InstanceDeleteLtsConfigOption } from './InstanceDeleteLtsConfigOption';


export class UnbindLtsConfigRequestBody {
    public list?: Array<InstanceDeleteLtsConfigOption>;
    public constructor(list?: Array<InstanceDeleteLtsConfigOption>) { 
        this['list'] = list;
    }
    public withList(list: Array<InstanceDeleteLtsConfigOption>): UnbindLtsConfigRequestBody {
        this['list'] = list;
        return this;
    }
}