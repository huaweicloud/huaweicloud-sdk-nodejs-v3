import { ListConnectionNumberDataList } from './ListConnectionNumberDataList';


export class ListConnectionNumberData {
    public name?: string;
    public list?: Array<ListConnectionNumberDataList>;
    public constructor() { 
    }
    public withName(name: string): ListConnectionNumberData {
        this['name'] = name;
        return this;
    }
    public withList(list: Array<ListConnectionNumberDataList>): ListConnectionNumberData {
        this['list'] = list;
        return this;
    }
}