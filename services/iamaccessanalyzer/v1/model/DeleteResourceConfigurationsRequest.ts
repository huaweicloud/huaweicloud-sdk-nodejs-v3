import { DeleteResourceConfigurationReqBody } from './DeleteResourceConfigurationReqBody';


export class DeleteResourceConfigurationsRequest {
    private 'analyzer_id'?: string;
    public body?: DeleteResourceConfigurationReqBody;
    public constructor(analyzerId?: string) { 
        this['analyzer_id'] = analyzerId;
    }
    public withAnalyzerId(analyzerId: string): DeleteResourceConfigurationsRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withBody(body: DeleteResourceConfigurationReqBody): DeleteResourceConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}