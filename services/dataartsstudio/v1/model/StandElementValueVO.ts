import { BizStatusEnum } from './BizStatusEnum';


export class StandElementValueVO {
    private 'fd_name'?: string;
    private 'fd_value'?: string;
    private 'fd_id'?: number;
    private 'directory_id'?: number;
    private 'row_id'?: number;
    public id?: number;
    public status?: BizStatusEnum;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor(fdName?: string) { 
        this['fd_name'] = fdName;
    }
    public withFdName(fdName: string): StandElementValueVO {
        this['fd_name'] = fdName;
        return this;
    }
    public set fdName(fdName: string  | undefined) {
        this['fd_name'] = fdName;
    }
    public get fdName(): string | undefined {
        return this['fd_name'];
    }
    public withFdValue(fdValue: string): StandElementValueVO {
        this['fd_value'] = fdValue;
        return this;
    }
    public set fdValue(fdValue: string  | undefined) {
        this['fd_value'] = fdValue;
    }
    public get fdValue(): string | undefined {
        return this['fd_value'];
    }
    public withFdId(fdId: number): StandElementValueVO {
        this['fd_id'] = fdId;
        return this;
    }
    public set fdId(fdId: number  | undefined) {
        this['fd_id'] = fdId;
    }
    public get fdId(): number | undefined {
        return this['fd_id'];
    }
    public withDirectoryId(directoryId: number): StandElementValueVO {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: number  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): number | undefined {
        return this['directory_id'];
    }
    public withRowId(rowId: number): StandElementValueVO {
        this['row_id'] = rowId;
        return this;
    }
    public set rowId(rowId: number  | undefined) {
        this['row_id'] = rowId;
    }
    public get rowId(): number | undefined {
        return this['row_id'];
    }
    public withId(id: number): StandElementValueVO {
        this['id'] = id;
        return this;
    }
    public withStatus(status: BizStatusEnum): StandElementValueVO {
        this['status'] = status;
        return this;
    }
    public withCreateBy(createBy: string): StandElementValueVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): StandElementValueVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): StandElementValueVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): StandElementValueVO {
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