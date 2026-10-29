import { CriterionSetListV2Body } from './CriterionSetListV2Body';


export class CriterionSetsInfo {
    public criterionSetList?: Array<CriterionSetListV2Body>;
    public total?: number;
    public constructor() { 
    }
    public withCriterionSetList(criterionSetList: Array<CriterionSetListV2Body>): CriterionSetsInfo {
        this['criterionSetList'] = criterionSetList;
        return this;
    }
    public withTotal(total: number): CriterionSetsInfo {
        this['total'] = total;
        return this;
    }
}