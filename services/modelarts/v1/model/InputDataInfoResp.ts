import { InputDataInfoRespDataset } from './InputDataInfoRespDataset';
import { InputDataInfoRespObs } from './InputDataInfoRespObs';


export class InputDataInfoResp {
    public dataset?: InputDataInfoRespDataset;
    public obs?: InputDataInfoRespObs;
    public constructor() { 
    }
    public withDataset(dataset: InputDataInfoRespDataset): InputDataInfoResp {
        this['dataset'] = dataset;
        return this;
    }
    public withObs(obs: InputDataInfoRespObs): InputDataInfoResp {
        this['obs'] = obs;
        return this;
    }
}