import { CatalogLevelVO } from './CatalogLevelVO';


export class ListSubjectLevelsResultData {
    public value?: Array<CatalogLevelVO>;
    public constructor() { 
    }
    public withValue(value: Array<CatalogLevelVO>): ListSubjectLevelsResultData {
        this['value'] = value;
        return this;
    }
}