import { CreatePluginRequestBody } from './CreatePluginRequestBody';


export class CreatePoolPluginRequest {
    private 'pool_name'?: string;
    public body?: CreatePluginRequestBody;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): CreatePoolPluginRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: CreatePluginRequestBody): CreatePoolPluginRequest {
        this['body'] = body;
        return this;
    }
}