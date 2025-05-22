import { SimpleProject } from './SimpleProject';
import { SimpleUser } from './SimpleUser';
import { StatusVo } from './StatusVo';


export class AssociatedTestCase {
    private 'case_id'?: string;
    private 'case_num'?: string;
    private 'case_name'?: string;
    private 'case_level'?: string;
    public status?: StatusVo;
    public creator?: SimpleUser;
    public owner?: SimpleUser;
    public project?: SimpleProject;
    private 'is_base_line'?: number;
    public type?: string;
    private 'created_time'?: number;
    public constructor() { 
    }
    public withCaseId(caseId: string): AssociatedTestCase {
        this['case_id'] = caseId;
        return this;
    }
    public set caseId(caseId: string  | undefined) {
        this['case_id'] = caseId;
    }
    public get caseId(): string | undefined {
        return this['case_id'];
    }
    public withCaseNum(caseNum: string): AssociatedTestCase {
        this['case_num'] = caseNum;
        return this;
    }
    public set caseNum(caseNum: string  | undefined) {
        this['case_num'] = caseNum;
    }
    public get caseNum(): string | undefined {
        return this['case_num'];
    }
    public withCaseName(caseName: string): AssociatedTestCase {
        this['case_name'] = caseName;
        return this;
    }
    public set caseName(caseName: string  | undefined) {
        this['case_name'] = caseName;
    }
    public get caseName(): string | undefined {
        return this['case_name'];
    }
    public withCaseLevel(caseLevel: string): AssociatedTestCase {
        this['case_level'] = caseLevel;
        return this;
    }
    public set caseLevel(caseLevel: string  | undefined) {
        this['case_level'] = caseLevel;
    }
    public get caseLevel(): string | undefined {
        return this['case_level'];
    }
    public withStatus(status: StatusVo): AssociatedTestCase {
        this['status'] = status;
        return this;
    }
    public withCreator(creator: SimpleUser): AssociatedTestCase {
        this['creator'] = creator;
        return this;
    }
    public withOwner(owner: SimpleUser): AssociatedTestCase {
        this['owner'] = owner;
        return this;
    }
    public withProject(project: SimpleProject): AssociatedTestCase {
        this['project'] = project;
        return this;
    }
    public withIsBaseLine(isBaseLine: number): AssociatedTestCase {
        this['is_base_line'] = isBaseLine;
        return this;
    }
    public set isBaseLine(isBaseLine: number  | undefined) {
        this['is_base_line'] = isBaseLine;
    }
    public get isBaseLine(): number | undefined {
        return this['is_base_line'];
    }
    public withType(type: string): AssociatedTestCase {
        this['type'] = type;
        return this;
    }
    public withCreatedTime(createdTime: number): AssociatedTestCase {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
}