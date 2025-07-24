import { AssignedUserInfo } from './AssignedUserInfo';
import { ExtendAuthorInfo } from './ExtendAuthorInfo';
import { ExternalServiceCaseStep } from './ExternalServiceCaseStep';


export class ExtendInfo {
    public author?: ExtendAuthorInfo;
    public updator?: ExtendAuthorInfo;
    public domain?: AssignedUserInfo;
    public description?: string;
    public preparation?: string;
    public steps?: Array<ExternalServiceCaseStep>;
    private 'label_list'?: Array<AssignedUserInfo>;
    private 'defect_list'?: Array<AssignedUserInfo>;
    public module?: AssignedUserInfo;
    public issue?: AssignedUserInfo;
    private 'test_version_id'?: string;
    private 'fixed_version'?: AssignedUserInfo;
    public constructor() { 
    }
    public withAuthor(author: ExtendAuthorInfo): ExtendInfo {
        this['author'] = author;
        return this;
    }
    public withUpdator(updator: ExtendAuthorInfo): ExtendInfo {
        this['updator'] = updator;
        return this;
    }
    public withDomain(domain: AssignedUserInfo): ExtendInfo {
        this['domain'] = domain;
        return this;
    }
    public withDescription(description: string): ExtendInfo {
        this['description'] = description;
        return this;
    }
    public withPreparation(preparation: string): ExtendInfo {
        this['preparation'] = preparation;
        return this;
    }
    public withSteps(steps: Array<ExternalServiceCaseStep>): ExtendInfo {
        this['steps'] = steps;
        return this;
    }
    public withLabelList(labelList: Array<AssignedUserInfo>): ExtendInfo {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<AssignedUserInfo>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<AssignedUserInfo> | undefined {
        return this['label_list'];
    }
    public withDefectList(defectList: Array<AssignedUserInfo>): ExtendInfo {
        this['defect_list'] = defectList;
        return this;
    }
    public set defectList(defectList: Array<AssignedUserInfo>  | undefined) {
        this['defect_list'] = defectList;
    }
    public get defectList(): Array<AssignedUserInfo> | undefined {
        return this['defect_list'];
    }
    public withModule(module: AssignedUserInfo): ExtendInfo {
        this['module'] = module;
        return this;
    }
    public withIssue(issue: AssignedUserInfo): ExtendInfo {
        this['issue'] = issue;
        return this;
    }
    public withTestVersionId(testVersionId: string): ExtendInfo {
        this['test_version_id'] = testVersionId;
        return this;
    }
    public set testVersionId(testVersionId: string  | undefined) {
        this['test_version_id'] = testVersionId;
    }
    public get testVersionId(): string | undefined {
        return this['test_version_id'];
    }
    public withFixedVersion(fixedVersion: AssignedUserInfo): ExtendInfo {
        this['fixed_version'] = fixedVersion;
        return this;
    }
    public set fixedVersion(fixedVersion: AssignedUserInfo  | undefined) {
        this['fixed_version'] = fixedVersion;
    }
    public get fixedVersion(): AssignedUserInfo | undefined {
        return this['fixed_version'];
    }
}