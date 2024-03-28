import { CreateSparkJobRequestBody } from './CreateSparkJobRequestBody';


export class CreateSparkJobRequest {
    private 'USER-ID'?: string;
    public body?: CreateSparkJobRequestBody;
    public constructor() { 
    }
    public withUserId(userId: string): CreateSparkJobRequest {
        this['USER-ID'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['USER-ID'] = userId;
    }
    public get userId(): string | undefined {
        return this['USER-ID'];
    }
    public withBody(body: CreateSparkJobRequestBody): CreateSparkJobRequest {
        this['body'] = body;
        return this;
    }
}