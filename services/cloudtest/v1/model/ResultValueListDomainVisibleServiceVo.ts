import { DomainVisibleServiceVo } from './DomainVisibleServiceVo';


export class ResultValueListDomainVisibleServiceVo {
    public value?: Array<DomainVisibleServiceVo>;
    public constructor() { 
    }
    public withValue(value: Array<DomainVisibleServiceVo>): ResultValueListDomainVisibleServiceVo {
        this['value'] = value;
        return this;
    }
}