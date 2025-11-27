

export class ListEmailRecordRequest {
    private 'datastore_type'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'send_status'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(datastoreType?: string) { 
        this['datastore_type'] = datastoreType;
    }
    public withDatastoreType(datastoreType: string): ListEmailRecordRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withStartAt(startAt: number): ListEmailRecordRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListEmailRecordRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withSendStatus(sendStatus: number): ListEmailRecordRequest {
        this['send_status'] = sendStatus;
        return this;
    }
    public set sendStatus(sendStatus: number  | undefined) {
        this['send_status'] = sendStatus;
    }
    public get sendStatus(): number | undefined {
        return this['send_status'];
    }
    public withOffset(offset: number): ListEmailRecordRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEmailRecordRequest {
        this['limit'] = limit;
        return this;
    }
}