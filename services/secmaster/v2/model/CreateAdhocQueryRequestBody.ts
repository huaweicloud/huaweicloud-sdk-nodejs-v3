import { ScriptParam } from './ScriptParam';


export class CreateAdhocQueryRequestBody {
    private 'session_id'?: string;
    public query?: string;
    private 'query_type'?: string;
    public from?: number;
    public to?: number;
    private 'script_params'?: Array<ScriptParam>;
    private 'time_zone'?: string;
    private 'sql_render_from'?: number;
    private 'sql_render_to'?: number;
    private 'source_page'?: string;
    public constructor() { 
    }
    public withSessionId(sessionId: string): CreateAdhocQueryRequestBody {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withQuery(query: string): CreateAdhocQueryRequestBody {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: string): CreateAdhocQueryRequestBody {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withFrom(from: number): CreateAdhocQueryRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): CreateAdhocQueryRequestBody {
        this['to'] = to;
        return this;
    }
    public withScriptParams(scriptParams: Array<ScriptParam>): CreateAdhocQueryRequestBody {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<ScriptParam>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<ScriptParam> | undefined {
        return this['script_params'];
    }
    public withTimeZone(timeZone: string): CreateAdhocQueryRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withSqlRenderFrom(sqlRenderFrom: number): CreateAdhocQueryRequestBody {
        this['sql_render_from'] = sqlRenderFrom;
        return this;
    }
    public set sqlRenderFrom(sqlRenderFrom: number  | undefined) {
        this['sql_render_from'] = sqlRenderFrom;
    }
    public get sqlRenderFrom(): number | undefined {
        return this['sql_render_from'];
    }
    public withSqlRenderTo(sqlRenderTo: number): CreateAdhocQueryRequestBody {
        this['sql_render_to'] = sqlRenderTo;
        return this;
    }
    public set sqlRenderTo(sqlRenderTo: number  | undefined) {
        this['sql_render_to'] = sqlRenderTo;
    }
    public get sqlRenderTo(): number | undefined {
        return this['sql_render_to'];
    }
    public withSourcePage(sourcePage: string): CreateAdhocQueryRequestBody {
        this['source_page'] = sourcePage;
        return this;
    }
    public set sourcePage(sourcePage: string  | undefined) {
        this['source_page'] = sourcePage;
    }
    public get sourcePage(): string | undefined {
        return this['source_page'];
    }
}