import { SecurityListUserTableListProposer } from './SecurityListUserTableListProposer';
import { SecurityListUserTableListTableList } from './SecurityListUserTableListTableList';


export class SecurityListUserTableList {
    private 'table_list'?: Array<SecurityListUserTableListTableList>;
    public proposer?: SecurityListUserTableListProposer;
    public constructor(proposer?: SecurityListUserTableListProposer) { 
        this['proposer'] = proposer;
    }
    public withTableList(tableList: Array<SecurityListUserTableListTableList>): SecurityListUserTableList {
        this['table_list'] = tableList;
        return this;
    }
    public set tableList(tableList: Array<SecurityListUserTableListTableList>  | undefined) {
        this['table_list'] = tableList;
    }
    public get tableList(): Array<SecurityListUserTableListTableList> | undefined {
        return this['table_list'];
    }
    public withProposer(proposer: SecurityListUserTableListProposer): SecurityListUserTableList {
        this['proposer'] = proposer;
        return this;
    }
}