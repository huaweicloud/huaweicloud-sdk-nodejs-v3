import { ListTableModelsResultDataValue } from './ListTableModelsResultDataValue';


export class ListTableModelsResultData {
    public value?: ListTableModelsResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListTableModelsResultDataValue): ListTableModelsResultData {
        this['value'] = value;
        return this;
    }
}