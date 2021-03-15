import { QueryResourceByTagsDTO } from './QueryResourceByTagsDTO';


export class ListResourcesByTagsRequest {
    private 'Instance-Id'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public body?: QueryResourceByTagsDTO;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListResourcesByTagsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withLimit(limit: number): ListResourcesByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListResourcesByTagsRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListResourcesByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: QueryResourceByTagsDTO): ListResourcesByTagsRequest {
        this['body'] = body;
        return this;
    }
}