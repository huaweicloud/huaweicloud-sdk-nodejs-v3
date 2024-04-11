import { ApprovalStatusEnum } from './ApprovalStatusEnum';
import { ApprovalTypeEnum } from './ApprovalTypeEnum';
import { BizStatusEnum } from './BizStatusEnum';
import { BizTypeEnum } from './BizTypeEnum';


export class ApprovalVO {
    public id?: string;
    private 'tenant_id'?: string;
    private 'name_ch'?: string;
    private 'name_en'?: string;
    private 'biz_id'?: string;
    private 'biz_type'?: BizTypeEnum;
    private 'biz_info'?: string;
    private 'biz_info_obj'?: object;
    private 'biz_version'?: number;
    private 'biz_status'?: BizStatusEnum;
    private 'approval_status'?: ApprovalStatusEnum;
    private 'approval_type'?: ApprovalTypeEnum;
    private 'submit_time'?: Date;
    private 'create_by'?: string;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    private 'approval_time'?: Date;
    public approver?: string;
    public email?: string;
    public msg?: string;
    private 'directory_path'?: string;
    public constructor() { 
    }
    public withId(id: string): ApprovalVO {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ApprovalVO {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withNameCh(nameCh: string): ApprovalVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withNameEn(nameEn: string): ApprovalVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withBizId(bizId: string): ApprovalVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withBizType(bizType: BizTypeEnum): ApprovalVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withBizInfo(bizInfo: string): ApprovalVO {
        this['biz_info'] = bizInfo;
        return this;
    }
    public set bizInfo(bizInfo: string  | undefined) {
        this['biz_info'] = bizInfo;
    }
    public get bizInfo(): string | undefined {
        return this['biz_info'];
    }
    public withBizInfoObj(bizInfoObj: object): ApprovalVO {
        this['biz_info_obj'] = bizInfoObj;
        return this;
    }
    public set bizInfoObj(bizInfoObj: object  | undefined) {
        this['biz_info_obj'] = bizInfoObj;
    }
    public get bizInfoObj(): object | undefined {
        return this['biz_info_obj'];
    }
    public withBizVersion(bizVersion: number): ApprovalVO {
        this['biz_version'] = bizVersion;
        return this;
    }
    public set bizVersion(bizVersion: number  | undefined) {
        this['biz_version'] = bizVersion;
    }
    public get bizVersion(): number | undefined {
        return this['biz_version'];
    }
    public withBizStatus(bizStatus: BizStatusEnum): ApprovalVO {
        this['biz_status'] = bizStatus;
        return this;
    }
    public set bizStatus(bizStatus: BizStatusEnum  | undefined) {
        this['biz_status'] = bizStatus;
    }
    public get bizStatus(): BizStatusEnum | undefined {
        return this['biz_status'];
    }
    public withApprovalStatus(approvalStatus: ApprovalStatusEnum): ApprovalVO {
        this['approval_status'] = approvalStatus;
        return this;
    }
    public set approvalStatus(approvalStatus: ApprovalStatusEnum  | undefined) {
        this['approval_status'] = approvalStatus;
    }
    public get approvalStatus(): ApprovalStatusEnum | undefined {
        return this['approval_status'];
    }
    public withApprovalType(approvalType: ApprovalTypeEnum): ApprovalVO {
        this['approval_type'] = approvalType;
        return this;
    }
    public set approvalType(approvalType: ApprovalTypeEnum  | undefined) {
        this['approval_type'] = approvalType;
    }
    public get approvalType(): ApprovalTypeEnum | undefined {
        return this['approval_type'];
    }
    public withSubmitTime(submitTime: Date): ApprovalVO {
        this['submit_time'] = submitTime;
        return this;
    }
    public set submitTime(submitTime: Date  | undefined) {
        this['submit_time'] = submitTime;
    }
    public get submitTime(): Date | undefined {
        return this['submit_time'];
    }
    public withCreateBy(createBy: string): ApprovalVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withL1(l1: string): ApprovalVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): ApprovalVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): ApprovalVO {
        this['l3'] = l3;
        return this;
    }
    public withApprovalTime(approvalTime: Date): ApprovalVO {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: Date  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): Date | undefined {
        return this['approval_time'];
    }
    public withApprover(approver: string): ApprovalVO {
        this['approver'] = approver;
        return this;
    }
    public withEmail(email: string): ApprovalVO {
        this['email'] = email;
        return this;
    }
    public withMsg(msg: string): ApprovalVO {
        this['msg'] = msg;
        return this;
    }
    public withDirectoryPath(directoryPath: string): ApprovalVO {
        this['directory_path'] = directoryPath;
        return this;
    }
    public set directoryPath(directoryPath: string  | undefined) {
        this['directory_path'] = directoryPath;
    }
    public get directoryPath(): string | undefined {
        return this['directory_path'];
    }
}