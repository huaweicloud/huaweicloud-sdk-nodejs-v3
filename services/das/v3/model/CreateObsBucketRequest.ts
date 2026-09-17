import { CreateObsBucketRequestBody } from './CreateObsBucketRequestBody';


export class CreateObsBucketRequest {
    private 'connection_id'?: string;
    public body?: CreateObsBucketRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): CreateObsBucketRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: CreateObsBucketRequestBody): CreateObsBucketRequest {
        this['body'] = body;
        return this;
    }
}