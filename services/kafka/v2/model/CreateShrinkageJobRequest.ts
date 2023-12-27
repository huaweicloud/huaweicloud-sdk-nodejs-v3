import { CreateShrinkageJobRequestBody } from './CreateShrinkageJobRequestBody';


export class CreateShrinkageJobRequest {
    public engine?: CreateShrinkageJobRequestEngineEnum | string;
    private 'instance_id'?: string;
    public body?: CreateShrinkageJobRequestBody;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: CreateShrinkageJobRequestEngineEnum | string): CreateShrinkageJobRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): CreateShrinkageJobRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateShrinkageJobRequestBody): CreateShrinkageJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateShrinkageJobRequestEngineEnum {
    KAFKA = 'kafka'
}
