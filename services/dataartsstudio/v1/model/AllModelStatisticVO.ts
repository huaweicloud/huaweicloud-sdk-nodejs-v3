import { ModelStatisticVO } from './ModelStatisticVO';


export class AllModelStatisticVO {
    public frequent?: Array<ModelStatisticVO>;
    public top?: Array<ModelStatisticVO>;
    public logic?: Array<ModelStatisticVO>;
    public physical?: Array<ModelStatisticVO>;
    public dwr?: ModelStatisticVO;
    public dm?: ModelStatisticVO;
    public constructor() { 
    }
    public withFrequent(frequent: Array<ModelStatisticVO>): AllModelStatisticVO {
        this['frequent'] = frequent;
        return this;
    }
    public withTop(top: Array<ModelStatisticVO>): AllModelStatisticVO {
        this['top'] = top;
        return this;
    }
    public withLogic(logic: Array<ModelStatisticVO>): AllModelStatisticVO {
        this['logic'] = logic;
        return this;
    }
    public withPhysical(physical: Array<ModelStatisticVO>): AllModelStatisticVO {
        this['physical'] = physical;
        return this;
    }
    public withDwr(dwr: ModelStatisticVO): AllModelStatisticVO {
        this['dwr'] = dwr;
        return this;
    }
    public withDm(dm: ModelStatisticVO): AllModelStatisticVO {
        this['dm'] = dm;
        return this;
    }
}