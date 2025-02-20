import { QueryDiagnosisResultItem } from './QueryDiagnosisResultItem';
import { QueryDiagnosisResultResultList } from './QueryDiagnosisResultResultList';
import { QueryDiagnosisResultSuggestionList } from './QueryDiagnosisResultSuggestionList';


export class QueryDiagnosisResultDiagnosisResults {
    public item?: QueryDiagnosisResultItem;
    public state?: string;
    private 'result_list'?: Array<QueryDiagnosisResultResultList>;
    private 'suggestion_list'?: Array<QueryDiagnosisResultSuggestionList>;
    public score?: number;
    public time?: string;
    public constructor() { 
    }
    public withItem(item: QueryDiagnosisResultItem): QueryDiagnosisResultDiagnosisResults {
        this['item'] = item;
        return this;
    }
    public withState(state: string): QueryDiagnosisResultDiagnosisResults {
        this['state'] = state;
        return this;
    }
    public withResultList(resultList: Array<QueryDiagnosisResultResultList>): QueryDiagnosisResultDiagnosisResults {
        this['result_list'] = resultList;
        return this;
    }
    public set resultList(resultList: Array<QueryDiagnosisResultResultList>  | undefined) {
        this['result_list'] = resultList;
    }
    public get resultList(): Array<QueryDiagnosisResultResultList> | undefined {
        return this['result_list'];
    }
    public withSuggestionList(suggestionList: Array<QueryDiagnosisResultSuggestionList>): QueryDiagnosisResultDiagnosisResults {
        this['suggestion_list'] = suggestionList;
        return this;
    }
    public set suggestionList(suggestionList: Array<QueryDiagnosisResultSuggestionList>  | undefined) {
        this['suggestion_list'] = suggestionList;
    }
    public get suggestionList(): Array<QueryDiagnosisResultSuggestionList> | undefined {
        return this['suggestion_list'];
    }
    public withScore(score: number): QueryDiagnosisResultDiagnosisResults {
        this['score'] = score;
        return this;
    }
    public withTime(time: string): QueryDiagnosisResultDiagnosisResults {
        this['time'] = time;
        return this;
    }
}