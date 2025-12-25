import { SearchScriptParam } from './SearchScriptParam';


export class ListTableLogsRequestBody {
    public query?: string;
    public from?: number;
    public to?: number;
    public limit?: number;
    public offset?: number;
    private 'script_params'?: Array<SearchScriptParam>;
    public constructor(query?: string, limit?: number) { 
        this['query'] = query;
        this['limit'] = limit;
    }
    public withQuery(query: string): ListTableLogsRequestBody {
        this['query'] = query;
        return this;
    }
    public withFrom(from: number): ListTableLogsRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListTableLogsRequestBody {
        this['to'] = to;
        return this;
    }
    public withLimit(limit: number): ListTableLogsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTableLogsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withScriptParams(scriptParams: Array<SearchScriptParam>): ListTableLogsRequestBody {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<SearchScriptParam>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<SearchScriptParam> | undefined {
        return this['script_params'];
    }
}