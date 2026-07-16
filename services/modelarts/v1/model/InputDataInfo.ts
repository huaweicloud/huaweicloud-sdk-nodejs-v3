import { InputDataInfoDataset } from './InputDataInfoDataset';
import { InputDataInfoObs } from './InputDataInfoObs';


export class InputDataInfo {
    public dataset?: InputDataInfoDataset;
    public obs?: InputDataInfoObs;
    public constructor() { 
    }
    public withDataset(dataset: InputDataInfoDataset): InputDataInfo {
        this['dataset'] = dataset;
        return this;
    }
    public withObs(obs: InputDataInfoObs): InputDataInfo {
        this['obs'] = obs;
        return this;
    }
}