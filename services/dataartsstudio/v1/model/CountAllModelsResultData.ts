import { AllModelStatisticVO } from './AllModelStatisticVO';


export class CountAllModelsResultData {
    public value?: AllModelStatisticVO;
    public constructor() { 
    }
    public withValue(value: AllModelStatisticVO): CountAllModelsResultData {
        this['value'] = value;
        return this;
    }
}