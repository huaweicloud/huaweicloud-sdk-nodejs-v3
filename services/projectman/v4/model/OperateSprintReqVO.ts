import { BaseLineVO } from './BaseLineVO';


export class OperateSprintReqVO {
    public ids?: Array<string>;
    public attribute?: BaseLineVO;
    public constructor(ids?: Array<string>, attribute?: BaseLineVO) { 
        this['ids'] = ids;
        this['attribute'] = attribute;
    }
    public withIds(ids: Array<string>): OperateSprintReqVO {
        this['ids'] = ids;
        return this;
    }
    public withAttribute(attribute: BaseLineVO): OperateSprintReqVO {
        this['attribute'] = attribute;
        return this;
    }
}