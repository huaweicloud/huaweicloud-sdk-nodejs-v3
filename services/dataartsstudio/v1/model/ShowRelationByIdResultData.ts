import { RelationVO } from './RelationVO';


export class ShowRelationByIdResultData {
    public value?: RelationVO;
    public constructor() { 
    }
    public withValue(value: RelationVO): ShowRelationByIdResultData {
        this['value'] = value;
        return this;
    }
}