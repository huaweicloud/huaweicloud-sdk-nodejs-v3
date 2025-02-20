

export class ListApplicationModelRequest {
    private 'application_id'?: string;
    private 'component_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'page_no'?: number;
    public constructor() { 
    }
    public withApplicationId(applicationId: string): ListApplicationModelRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): ListApplicationModelRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withLimit(limit: number): ListApplicationModelRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListApplicationModelRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageNo(pageNo: number): ListApplicationModelRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
}