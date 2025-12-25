import { ShowModuleVo } from './ShowModuleVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCollectorParserResponse extends SdkResponse {
    private 'channel_refer_count'?: number;
    public description?: string;
    public modules?: Array<ShowModuleVo>;
    private 'parser_id'?: string;
    public title?: string;
    public constructor() { 
        super();
    }
    public withChannelReferCount(channelReferCount: number): ShowCollectorParserResponse {
        this['channel_refer_count'] = channelReferCount;
        return this;
    }
    public set channelReferCount(channelReferCount: number  | undefined) {
        this['channel_refer_count'] = channelReferCount;
    }
    public get channelReferCount(): number | undefined {
        return this['channel_refer_count'];
    }
    public withDescription(description: string): ShowCollectorParserResponse {
        this['description'] = description;
        return this;
    }
    public withModules(modules: Array<ShowModuleVo>): ShowCollectorParserResponse {
        this['modules'] = modules;
        return this;
    }
    public withParserId(parserId: string): ShowCollectorParserResponse {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
    public withTitle(title: string): ShowCollectorParserResponse {
        this['title'] = title;
        return this;
    }
}