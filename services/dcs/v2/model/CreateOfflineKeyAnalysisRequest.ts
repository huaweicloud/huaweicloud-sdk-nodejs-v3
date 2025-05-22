import { CreateOfflineKeyAnalysisRequestBody } from './CreateOfflineKeyAnalysisRequestBody';


export class CreateOfflineKeyAnalysisRequest {
    private 'instance_id'?: string;
    public body?: CreateOfflineKeyAnalysisRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateOfflineKeyAnalysisRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateOfflineKeyAnalysisRequestBody): CreateOfflineKeyAnalysisRequest {
        this['body'] = body;
        return this;
    }
}