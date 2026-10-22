import { Policy } from './Policy';


export class AiAppItem {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'api_sign'?: string;
    private 'protect_status'?: number;
    public policy?: Policy;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withId(id: string): AiAppItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AiAppItem {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiAppItem {
        this['description'] = description;
        return this;
    }
    public withApiSign(apiSign: string): AiAppItem {
        this['api_sign'] = apiSign;
        return this;
    }
    public set apiSign(apiSign: string  | undefined) {
        this['api_sign'] = apiSign;
    }
    public get apiSign(): string | undefined {
        return this['api_sign'];
    }
    public withProtectStatus(protectStatus: number): AiAppItem {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
    public withPolicy(policy: Policy): AiAppItem {
        this['policy'] = policy;
        return this;
    }
    public withCreateTime(createTime: number): AiAppItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AiAppItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}