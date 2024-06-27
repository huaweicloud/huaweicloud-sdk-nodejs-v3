import { ClickHouseResizeFlavorRequestBody } from './ClickHouseResizeFlavorRequestBody';


export class ResizeClickHouseFlavorRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: ClickHouseResizeFlavorRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResizeClickHouseFlavorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ResizeClickHouseFlavorRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ClickHouseResizeFlavorRequestBody): ResizeClickHouseFlavorRequest {
        this['body'] = body;
        return this;
    }
}