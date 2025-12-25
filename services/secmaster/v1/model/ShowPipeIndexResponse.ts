import { KeyIndex } from './KeyIndex';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipeIndexResponse extends SdkResponse {
    public mapping?: { [key: string]: KeyIndex; };
    private 'pipe_id'?: string;
    public status?: ShowPipeIndexResponseStatusEnum | string;
    private 'timestamp_field'?: string;
    public constructor() { 
        super();
    }
    public withMapping(mapping: { [key: string]: KeyIndex; }): ShowPipeIndexResponse {
        this['mapping'] = mapping;
        return this;
    }
    public withPipeId(pipeId: string): ShowPipeIndexResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withStatus(status: ShowPipeIndexResponseStatusEnum | string): ShowPipeIndexResponse {
        this['status'] = status;
        return this;
    }
    public withTimestampField(timestampField: string): ShowPipeIndexResponse {
        this['timestamp_field'] = timestampField;
        return this;
    }
    public set timestampField(timestampField: string  | undefined) {
        this['timestamp_field'] = timestampField;
    }
    public get timestampField(): string | undefined {
        return this['timestamp_field'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPipeIndexResponseStatusEnum {
    OPEN = 'open',
    CLOSED = 'closed'
}
