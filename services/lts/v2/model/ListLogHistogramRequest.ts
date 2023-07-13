import { QueryLogKeyWordCountRequestBody } from './QueryLogKeyWordCountRequestBody';


export class ListLogHistogramRequest {
    private 'Content-Type': string | undefined;
    public body?: QueryLogKeyWordCountRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListLogHistogramRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: QueryLogKeyWordCountRequestBody): ListLogHistogramRequest {
        this['body'] = body;
        return this;
    }
}