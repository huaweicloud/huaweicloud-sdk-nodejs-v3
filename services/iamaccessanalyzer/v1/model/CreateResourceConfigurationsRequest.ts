import { CreateResourceConfigurationsReqBody } from './CreateResourceConfigurationsReqBody';


export class CreateResourceConfigurationsRequest {
    private 'analyzer_id'?: string;
    public body?: CreateResourceConfigurationsReqBody;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): CreateResourceConfigurationsRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withBody(body: CreateResourceConfigurationsReqBody): CreateResourceConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}