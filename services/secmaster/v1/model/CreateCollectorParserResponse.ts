
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCollectorParserResponse extends SdkResponse {
    private 'parser_id'?: string;
    public constructor() { 
        super();
    }
    public withParserId(parserId: string): CreateCollectorParserResponse {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
}