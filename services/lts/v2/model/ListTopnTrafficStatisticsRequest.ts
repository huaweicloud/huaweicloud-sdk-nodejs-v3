import { TopnRequstBody } from './TopnRequstBody';


export class ListTopnTrafficStatisticsRequest {
    private 'Content-Type'?: string;
    public body?: TopnRequstBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListTopnTrafficStatisticsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: TopnRequstBody): ListTopnTrafficStatisticsRequest {
        this['body'] = body;
        return this;
    }
}