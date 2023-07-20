

export class ListListenersRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: string;
    public name?: string;
    public status?: ListListenersRequestStatusEnum | string;
    private 'accelerator_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListListenersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListListenersRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListListenersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: string): ListListenersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListListenersRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListListenersRequestStatusEnum | string): ListListenersRequest {
        this['status'] = status;
        return this;
    }
    public withAcceleratorId(acceleratorId: string): ListListenersRequest {
        this['accelerator_id'] = acceleratorId;
        return this;
    }
    public set acceleratorId(acceleratorId: string  | undefined) {
        this['accelerator_id'] = acceleratorId;
    }
    public get acceleratorId(): string | undefined {
        return this['accelerator_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListListenersRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    ERROR = 'ERROR',
    DELETING = 'DELETING'
}
