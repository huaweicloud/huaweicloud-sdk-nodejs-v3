import { TableModelStatisticVO } from './TableModelStatisticVO';


export class CountTableModelsResultData {
    public value?: TableModelStatisticVO;
    public constructor() { 
    }
    public withValue(value: TableModelStatisticVO): CountTableModelsResultData {
        this['value'] = value;
        return this;
    }
}