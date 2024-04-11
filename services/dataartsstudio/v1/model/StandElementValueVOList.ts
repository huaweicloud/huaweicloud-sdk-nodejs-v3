import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { StandElementValueVO } from './StandElementValueVO';


export class StandElementValueVOList {
    public values?: Array<StandElementValueVO>;
    public id?: number;
    private 'directory_id'?: number;
    private 'directory_path'?: string;
    private 'row_id'?: number;
    public status?: BizStatusEnum;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    private 'from_public'?: boolean;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor(values?: Array<StandElementValueVO>, directoryId?: number) { 
        this['values'] = values;
        this['directory_id'] = directoryId;
    }
    public withValues(values: Array<StandElementValueVO>): StandElementValueVOList {
        this['values'] = values;
        return this;
    }
    public withId(id: number): StandElementValueVOList {
        this['id'] = id;
        return this;
    }
    public withDirectoryId(directoryId: number): StandElementValueVOList {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: number  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): number | undefined {
        return this['directory_id'];
    }
    public withDirectoryPath(directoryPath: string): StandElementValueVOList {
        this['directory_path'] = directoryPath;
        return this;
    }
    public set directoryPath(directoryPath: string  | undefined) {
        this['directory_path'] = directoryPath;
    }
    public get directoryPath(): string | undefined {
        return this['directory_path'];
    }
    public withRowId(rowId: number): StandElementValueVOList {
        this['row_id'] = rowId;
        return this;
    }
    public set rowId(rowId: number  | undefined) {
        this['row_id'] = rowId;
    }
    public get rowId(): number | undefined {
        return this['row_id'];
    }
    public withStatus(status: BizStatusEnum): StandElementValueVOList {
        this['status'] = status;
        return this;
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): StandElementValueVOList {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): StandElementValueVOList {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withFromPublic(fromPublic: boolean): StandElementValueVOList {
        this['from_public'] = fromPublic;
        return this;
    }
    public set fromPublic(fromPublic: boolean  | undefined) {
        this['from_public'] = fromPublic;
    }
    public get fromPublic(): boolean | undefined {
        return this['from_public'];
    }
    public withCreateBy(createBy: string): StandElementValueVOList {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): StandElementValueVOList {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): StandElementValueVOList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): StandElementValueVOList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}