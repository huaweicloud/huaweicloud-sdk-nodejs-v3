import { KeyIndex } from './KeyIndex';


export class UpdateIndexRequestBody {
    public mapping?: { [key: string]: KeyIndex; };
    private 'pipe_id'?: string;
    public status?: UpdateIndexRequestBodyStatusEnum | string;
    private 'timestamp_field'?: string;
    public constructor(mapping?: { [key: string]: KeyIndex; }, pipeId?: string, status?: string, timestampField?: string) { 
        this['mapping'] = mapping;
        this['pipe_id'] = pipeId;
        this['status'] = status;
        this['timestamp_field'] = timestampField;
    }
    public withMapping(mapping: { [key: string]: KeyIndex; }): UpdateIndexRequestBody {
        this['mapping'] = mapping;
        return this;
    }
    public withPipeId(pipeId: string): UpdateIndexRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withStatus(status: UpdateIndexRequestBodyStatusEnum | string): UpdateIndexRequestBody {
        this['status'] = status;
        return this;
    }
    public withTimestampField(timestampField: string): UpdateIndexRequestBody {
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
export enum UpdateIndexRequestBodyStatusEnum {
    OPEN = 'open',
    CLOSED = 'closed'
}
