import { CreateProcessInstanceReqCcbs } from './CreateProcessInstanceReqCcbs';
import { CreateProcessInstanceReqCos } from './CreateProcessInstanceReqCos';
import { CreateProcessInstanceReqOpinions } from './CreateProcessInstanceReqOpinions';


export class CreateProcessInstanceReq {
    public title?: string;
    public description?: string;
    public category?: string;
    private 'need_approval'?: boolean;
    private 'plan_end_date'?: string;
    private 'plan_start_date'?: string;
    public status?: string;
    public cc?: Array<string>;
    public attachWikis?: Array<string>;
    public attachDocuments?: Array<string>;
    public ccbs?: Array<CreateProcessInstanceReqCcbs>;
    public opinions?: Array<CreateProcessInstanceReqOpinions>;
    public cos?: Array<CreateProcessInstanceReqCos>;
    private 'local_attachment_names'?: Array<string>;
    public constructor(title?: string, description?: string, category?: string, status?: string) { 
        this['title'] = title;
        this['description'] = description;
        this['category'] = category;
        this['status'] = status;
    }
    public withTitle(title: string): CreateProcessInstanceReq {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): CreateProcessInstanceReq {
        this['description'] = description;
        return this;
    }
    public withCategory(category: string): CreateProcessInstanceReq {
        this['category'] = category;
        return this;
    }
    public withNeedApproval(needApproval: boolean): CreateProcessInstanceReq {
        this['need_approval'] = needApproval;
        return this;
    }
    public set needApproval(needApproval: boolean  | undefined) {
        this['need_approval'] = needApproval;
    }
    public get needApproval(): boolean | undefined {
        return this['need_approval'];
    }
    public withPlanEndDate(planEndDate: string): CreateProcessInstanceReq {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withPlanStartDate(planStartDate: string): CreateProcessInstanceReq {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withStatus(status: string): CreateProcessInstanceReq {
        this['status'] = status;
        return this;
    }
    public withCc(cc: Array<string>): CreateProcessInstanceReq {
        this['cc'] = cc;
        return this;
    }
    public withAttachWikis(attachWikis: Array<string>): CreateProcessInstanceReq {
        this['attachWikis'] = attachWikis;
        return this;
    }
    public withAttachDocuments(attachDocuments: Array<string>): CreateProcessInstanceReq {
        this['attachDocuments'] = attachDocuments;
        return this;
    }
    public withCcbs(ccbs: Array<CreateProcessInstanceReqCcbs>): CreateProcessInstanceReq {
        this['ccbs'] = ccbs;
        return this;
    }
    public withOpinions(opinions: Array<CreateProcessInstanceReqOpinions>): CreateProcessInstanceReq {
        this['opinions'] = opinions;
        return this;
    }
    public withCos(cos: Array<CreateProcessInstanceReqCos>): CreateProcessInstanceReq {
        this['cos'] = cos;
        return this;
    }
    public withLocalAttachmentNames(localAttachmentNames: Array<string>): CreateProcessInstanceReq {
        this['local_attachment_names'] = localAttachmentNames;
        return this;
    }
    public set localAttachmentNames(localAttachmentNames: Array<string>  | undefined) {
        this['local_attachment_names'] = localAttachmentNames;
    }
    public get localAttachmentNames(): Array<string> | undefined {
        return this['local_attachment_names'];
    }
}