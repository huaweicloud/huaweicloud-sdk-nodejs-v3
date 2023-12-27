import { ShowShrinkCheckRequestBody } from './ShowShrinkCheckRequestBody';


export class ShowShrinkCheckResultRequest {
    public engine?: ShowShrinkCheckResultRequestEngineEnum | string;
    private 'instance_id'?: string;
    public body?: ShowShrinkCheckRequestBody;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: ShowShrinkCheckResultRequestEngineEnum | string): ShowShrinkCheckResultRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ShowShrinkCheckResultRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ShowShrinkCheckRequestBody): ShowShrinkCheckResultRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowShrinkCheckResultRequestEngineEnum {
    KAFKA = 'kafka'
}
