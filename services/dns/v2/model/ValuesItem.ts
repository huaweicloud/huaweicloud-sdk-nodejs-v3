import { ListApiVersionsItem } from './ListApiVersionsItem';


export class ValuesItem {
    public values?: Array<ListApiVersionsItem>;
    public constructor() { 
    }
    public withValues(values: Array<ListApiVersionsItem>): ValuesItem {
        this['values'] = values;
        return this;
    }
}