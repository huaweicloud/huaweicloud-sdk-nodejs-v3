import { KeyIndex } from './KeyIndex';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePipeIndexResponse extends SdkResponse {
    public mapping?: { [key: string]: KeyIndex; };
    private 'pipe_id'?: string;
    public status?: UpdatePipeIndexResponseStatusEnum | string;
    private 'timestamp_field'?: string;
    public constructor() { 
        super();
    }
    public withMapping(mapping: { [key: string]: KeyIndex; }): UpdatePipeIndexResponse {
        this['mapping'] = mapping;
        return this;
    }
    public withPipeId(pipeId: string): UpdatePipeIndexResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withStatus(status: UpdatePipeIndexResponseStatusEnum | string): UpdatePipeIndexResponse {
        this['status'] = status;
        return this;
    }
    public withTimestampField(timestampField: string): UpdatePipeIndexResponse {
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
export enum UpdatePipeIndexResponseStatusEnum {
    OPEN = 'open',
    CLOSED = 'closed'
}
