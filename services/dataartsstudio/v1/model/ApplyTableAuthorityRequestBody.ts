import { ListTableApproversRequestBody } from './ListTableApproversRequestBody';
import { TableApprover } from './TableApprover';
import { TableProposers } from './TableProposers';


export class ApplyTableAuthorityRequestBody {
    public approver?: TableApprover;
    private 'table_info'?: ListTableApproversRequestBody;
    public proposers?: Array<TableProposers>;
    public reason?: string;
    public constructor() { 
    }
    public withApprover(approver: TableApprover): ApplyTableAuthorityRequestBody {
        this['approver'] = approver;
        return this;
    }
    public withTableInfo(tableInfo: ListTableApproversRequestBody): ApplyTableAuthorityRequestBody {
        this['table_info'] = tableInfo;
        return this;
    }
    public set tableInfo(tableInfo: ListTableApproversRequestBody  | undefined) {
        this['table_info'] = tableInfo;
    }
    public get tableInfo(): ListTableApproversRequestBody | undefined {
        return this['table_info'];
    }
    public withProposers(proposers: Array<TableProposers>): ApplyTableAuthorityRequestBody {
        this['proposers'] = proposers;
        return this;
    }
    public withReason(reason: string): ApplyTableAuthorityRequestBody {
        this['reason'] = reason;
        return this;
    }
}