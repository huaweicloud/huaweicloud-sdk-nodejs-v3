import { InterActiveParams } from './InterActiveParams';
import { ScriptParam } from './ScriptParam';


export class CreateSqlRenderRequestBody {
    public query?: string;
    private 'script_params'?: Array<ScriptParam>;
    private 'transform_query'?: string;
    private 'session_id'?: string;
    private 'time_zone'?: string;
    private 'inter_active_params'?: Array<InterActiveParams>;
    public from?: number;
    public to?: number;
    public constructor() { 
    }
    public withQuery(query: string): CreateSqlRenderRequestBody {
        this['query'] = query;
        return this;
    }
    public withScriptParams(scriptParams: Array<ScriptParam>): CreateSqlRenderRequestBody {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<ScriptParam>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<ScriptParam> | undefined {
        return this['script_params'];
    }
    public withTransformQuery(transformQuery: string): CreateSqlRenderRequestBody {
        this['transform_query'] = transformQuery;
        return this;
    }
    public set transformQuery(transformQuery: string  | undefined) {
        this['transform_query'] = transformQuery;
    }
    public get transformQuery(): string | undefined {
        return this['transform_query'];
    }
    public withSessionId(sessionId: string): CreateSqlRenderRequestBody {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withTimeZone(timeZone: string): CreateSqlRenderRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withInterActiveParams(interActiveParams: Array<InterActiveParams>): CreateSqlRenderRequestBody {
        this['inter_active_params'] = interActiveParams;
        return this;
    }
    public set interActiveParams(interActiveParams: Array<InterActiveParams>  | undefined) {
        this['inter_active_params'] = interActiveParams;
    }
    public get interActiveParams(): Array<InterActiveParams> | undefined {
        return this['inter_active_params'];
    }
    public withFrom(from: number): CreateSqlRenderRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): CreateSqlRenderRequestBody {
        this['to'] = to;
        return this;
    }
}