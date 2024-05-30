import { CatalogLevelVOList } from './CatalogLevelVOList';


export class ChangeSubjectsResultData {
    public value?: CatalogLevelVOList;
    public constructor() { 
    }
    public withValue(value: CatalogLevelVOList): ChangeSubjectsResultData {
        this['value'] = value;
        return this;
    }
}