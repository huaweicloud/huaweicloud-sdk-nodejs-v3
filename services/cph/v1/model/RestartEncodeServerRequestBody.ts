

export class RestartEncodeServerRequestBody {
    private 'encode_server_ids'?: Array<string>;
    public constructor(encodeServerIds?: Array<string>) { 
        this['encode_server_ids'] = encodeServerIds;
    }
    public withEncodeServerIds(encodeServerIds: Array<string>): RestartEncodeServerRequestBody {
        this['encode_server_ids'] = encodeServerIds;
        return this;
    }
    public set encodeServerIds(encodeServerIds: Array<string>  | undefined) {
        this['encode_server_ids'] = encodeServerIds;
    }
    public get encodeServerIds(): Array<string> | undefined {
        return this['encode_server_ids'];
    }
}