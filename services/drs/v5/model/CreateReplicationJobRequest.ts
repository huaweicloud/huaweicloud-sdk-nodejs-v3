import { CreateOfflineTaskReq } from './CreateOfflineTaskReq';


export class CreateReplicationJobRequest {
    private 'X-Language'?: string;
    public body?: CreateOfflineTaskReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateReplicationJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateOfflineTaskReq): CreateReplicationJobRequest {
        this['body'] = body;
        return this;
    }
}