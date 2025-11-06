import { RelatedCommitVo } from './RelatedCommitVo';


export class RelatedCommitListVo {
    public total?: number;
    public list?: Array<RelatedCommitVo>;
    public constructor() { 
    }
    public withTotal(total: number): RelatedCommitListVo {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<RelatedCommitVo>): RelatedCommitListVo {
        this['list'] = list;
        return this;
    }
}