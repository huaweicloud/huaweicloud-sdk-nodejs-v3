import { ListTableModelRelationsResultDataValue } from './ListTableModelRelationsResultDataValue';


export class ListTableModelRelationsResultData {
    public value?: ListTableModelRelationsResultDataValue;
    public constructor() { 
    }
    public withValue(value: ListTableModelRelationsResultDataValue): ListTableModelRelationsResultData {
        this['value'] = value;
        return this;
    }
}