import { ResponseInfo } from './ResponseInfo';
import { ResponseInfoHeader } from './ResponseInfoHeader';


export class ResponseInfoResp {
    public status?: number;
    public body?: string;
    public headers?: Array<ResponseInfoHeader>;
    private 'default'?: boolean;
    public constructor() { 
    }
    public withStatus(status: number): ResponseInfoResp {
        this['status'] = status;
        return this;
    }
    public withBody(body: string): ResponseInfoResp {
        this['body'] = body;
        return this;
    }
    public withHeaders(headers: Array<ResponseInfoHeader>): ResponseInfoResp {
        this['headers'] = headers;
        return this;
    }
    public withDefault(_default: boolean): ResponseInfoResp {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
}