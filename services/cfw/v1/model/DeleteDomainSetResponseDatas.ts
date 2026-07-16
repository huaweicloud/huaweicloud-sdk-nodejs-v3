import { DomainSetId } from './DomainSetId';


export class DeleteDomainSetResponseDatas {
    public responseDatas?: Array<DomainSetId>;
    public constructor() { 
    }
    public withResponseDatas(responseDatas: Array<DomainSetId>): DeleteDomainSetResponseDatas {
        this['responseDatas'] = responseDatas;
        return this;
    }
}