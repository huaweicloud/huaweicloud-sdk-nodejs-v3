import { TableModelVO } from './TableModelVO';


export class UpdateDesignTableQualityResultData {
    public value?: TableModelVO;
    public constructor() { 
    }
    public withValue(value: TableModelVO): UpdateDesignTableQualityResultData {
        this['value'] = value;
        return this;
    }
}