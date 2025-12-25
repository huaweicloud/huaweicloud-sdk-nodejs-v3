import { ExportParserResponseDto } from './ExportParserResponseDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportCollectorParserResponse extends SdkResponse {
    private 'parser_ids'?: Array<ExportParserResponseDto>;
    public constructor() { 
        super();
    }
    public withParserIds(parserIds: Array<ExportParserResponseDto>): ExportCollectorParserResponse {
        this['parser_ids'] = parserIds;
        return this;
    }
    public set parserIds(parserIds: Array<ExportParserResponseDto>  | undefined) {
        this['parser_ids'] = parserIds;
    }
    public get parserIds(): Array<ExportParserResponseDto> | undefined {
        return this['parser_ids'];
    }
}