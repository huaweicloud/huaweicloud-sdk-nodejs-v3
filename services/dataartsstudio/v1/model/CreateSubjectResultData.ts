import { CatalogVO } from './CatalogVO';


export class CreateSubjectResultData {
    public value?: CatalogVO;
    public constructor() { 
    }
    public withValue(value: CatalogVO): CreateSubjectResultData {
        this['value'] = value;
        return this;
    }
}