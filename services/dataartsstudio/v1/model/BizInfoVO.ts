import { BizTypeEnum } from './BizTypeEnum';
import { EnvTypeEnum } from './EnvTypeEnum';


export class BizInfoVO {
    private 'biz_id'?: string;
    private 'biz_type'?: BizTypeEnum;
    private 'env_type'?: EnvTypeEnum;
    public constructor(bizId?: string, bizType?: BizTypeEnum) { 
        this['biz_id'] = bizId;
        this['biz_type'] = bizType;
    }
    public withBizId(bizId: string): BizInfoVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withBizType(bizType: BizTypeEnum): BizInfoVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withEnvType(envType: EnvTypeEnum): BizInfoVO {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: EnvTypeEnum  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): EnvTypeEnum | undefined {
        return this['env_type'];
    }
}