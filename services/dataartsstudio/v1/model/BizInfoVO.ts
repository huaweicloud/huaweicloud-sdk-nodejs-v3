import { BizTypeEnum } from './BizTypeEnum';


export class BizInfoVO {
    private 'biz_id'?: number;
    private 'biz_type'?: BizTypeEnum;
    public constructor(bizId?: number, bizType?: BizTypeEnum) { 
        this['biz_id'] = bizId;
        this['biz_type'] = bizType;
    }
    public withBizId(bizId: number): BizInfoVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: number  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): number | undefined {
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
}