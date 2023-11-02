import { ApprovalVO } from './ApprovalVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { CodeTableFieldVO } from './CodeTableFieldVO';


export class CodeTableVO {
    public id?: number;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    private 'tb_version'?: number;
    private 'directory_id'?: number;
    private 'directory_path'?: string;
    public description?: string;
    private 'create_by'?: string;
    public status?: BizStatusEnum;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    private 'code_table_fields'?: Array<CodeTableFieldVO>;
    public constructor(nameEn?: string, nameCh?: string, directoryId?: number, codeTableFields?: Array<CodeTableFieldVO>) { 
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
        this['directory_id'] = directoryId;
        this['code_table_fields'] = codeTableFields;
    }
    public withId(id: number): CodeTableVO {
        this['id'] = id;
        return this;
    }
    public withNameEn(nameEn: string): CodeTableVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): CodeTableVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withTbVersion(tbVersion: number): CodeTableVO {
        this['tb_version'] = tbVersion;
        return this;
    }
    public set tbVersion(tbVersion: number  | undefined) {
        this['tb_version'] = tbVersion;
    }
    public get tbVersion(): number | undefined {
        return this['tb_version'];
    }
    public withDirectoryId(directoryId: number): CodeTableVO {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: number  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): number | undefined {
        return this['directory_id'];
    }
    public withDirectoryPath(directoryPath: string): CodeTableVO {
        this['directory_path'] = directoryPath;
        return this;
    }
    public set directoryPath(directoryPath: string  | undefined) {
        this['directory_path'] = directoryPath;
    }
    public get directoryPath(): string | undefined {
        return this['directory_path'];
    }
    public withDescription(description: string): CodeTableVO {
        this['description'] = description;
        return this;
    }
    public withCreateBy(createBy: string): CodeTableVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withStatus(status: BizStatusEnum): CodeTableVO {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): CodeTableVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): CodeTableVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): CodeTableVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): CodeTableVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withCodeTableFields(codeTableFields: Array<CodeTableFieldVO>): CodeTableVO {
        this['code_table_fields'] = codeTableFields;
        return this;
    }
    public set codeTableFields(codeTableFields: Array<CodeTableFieldVO>  | undefined) {
        this['code_table_fields'] = codeTableFields;
    }
    public get codeTableFields(): Array<CodeTableFieldVO> | undefined {
        return this['code_table_fields'];
    }
}