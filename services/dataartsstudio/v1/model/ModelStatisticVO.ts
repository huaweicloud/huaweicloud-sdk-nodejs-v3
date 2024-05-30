import { BizTypeEnum } from './BizTypeEnum';
import { ModelLevel } from './ModelLevel';
import { WorkspaceVO } from './WorkspaceVO';


export class ModelStatisticVO {
    private 'biz_type'?: BizTypeEnum;
    public level?: ModelLevel;
    public db?: number;
    public tb?: number;
    private 'tb_published'?: number;
    public fd?: number;
    private 'fd_published'?: number;
    public st?: number;
    private 'st_published'?: number;
    public model?: WorkspaceVO;
    public constructor() { 
    }
    public withBizType(bizType: BizTypeEnum): ModelStatisticVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withLevel(level: ModelLevel): ModelStatisticVO {
        this['level'] = level;
        return this;
    }
    public withDb(db: number): ModelStatisticVO {
        this['db'] = db;
        return this;
    }
    public withTb(tb: number): ModelStatisticVO {
        this['tb'] = tb;
        return this;
    }
    public withTbPublished(tbPublished: number): ModelStatisticVO {
        this['tb_published'] = tbPublished;
        return this;
    }
    public set tbPublished(tbPublished: number  | undefined) {
        this['tb_published'] = tbPublished;
    }
    public get tbPublished(): number | undefined {
        return this['tb_published'];
    }
    public withFd(fd: number): ModelStatisticVO {
        this['fd'] = fd;
        return this;
    }
    public withFdPublished(fdPublished: number): ModelStatisticVO {
        this['fd_published'] = fdPublished;
        return this;
    }
    public set fdPublished(fdPublished: number  | undefined) {
        this['fd_published'] = fdPublished;
    }
    public get fdPublished(): number | undefined {
        return this['fd_published'];
    }
    public withSt(st: number): ModelStatisticVO {
        this['st'] = st;
        return this;
    }
    public withStPublished(stPublished: number): ModelStatisticVO {
        this['st_published'] = stPublished;
        return this;
    }
    public set stPublished(stPublished: number  | undefined) {
        this['st_published'] = stPublished;
    }
    public get stPublished(): number | undefined {
        return this['st_published'];
    }
    public withModel(model: WorkspaceVO): ModelStatisticVO {
        this['model'] = model;
        return this;
    }
}