import { AssociateDefectInfoVo } from './AssociateDefectInfoVo';
import { AssociateIssueInfoVo } from './AssociateIssueInfoVo';
import { CreateInfoVo } from './CreateInfoVo';
import { ExecuteInfoVo } from './ExecuteInfoVo';
import { IntegerIdAndNameVo } from './IntegerIdAndNameVo';
import { NameAndIdVo } from './NameAndIdVo';


export class ExternalTestCaseVo {
    public name?: string;
    public owner?: NameAndIdVo;
    public status?: NameAndIdVo;
    public result?: NameAndIdVo;
    public module?: NameAndIdVo;
    public iteration?: NameAndIdVo;
    public id?: string;
    private 'number'?: string;
    public description?: string;
    private 'rank_id'?: string;
    private 'project_id'?: string;
    private 'execution_type'?: NameAndIdVo;
    private 'test_type'?: IntegerIdAndNameVo;
    private 'create_info'?: CreateInfoVo;
    private 'execute_info'?: ExecuteInfoVo;
    private 'associate_issue_info'?: AssociateIssueInfoVo;
    private 'associate_defect_info'?: AssociateDefectInfoVo;
    public constructor() { 
    }
    public withName(name: string): ExternalTestCaseVo {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: NameAndIdVo): ExternalTestCaseVo {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: NameAndIdVo): ExternalTestCaseVo {
        this['status'] = status;
        return this;
    }
    public withResult(result: NameAndIdVo): ExternalTestCaseVo {
        this['result'] = result;
        return this;
    }
    public withModule(module: NameAndIdVo): ExternalTestCaseVo {
        this['module'] = module;
        return this;
    }
    public withIteration(iteration: NameAndIdVo): ExternalTestCaseVo {
        this['iteration'] = iteration;
        return this;
    }
    public withId(id: string): ExternalTestCaseVo {
        this['id'] = id;
        return this;
    }
    public withModelNumber(modelNumber: string): ExternalTestCaseVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withDescription(description: string): ExternalTestCaseVo {
        this['description'] = description;
        return this;
    }
    public withRankId(rankId: string): ExternalTestCaseVo {
        this['rank_id'] = rankId;
        return this;
    }
    public set rankId(rankId: string  | undefined) {
        this['rank_id'] = rankId;
    }
    public get rankId(): string | undefined {
        return this['rank_id'];
    }
    public withProjectId(projectId: string): ExternalTestCaseVo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withExecutionType(executionType: NameAndIdVo): ExternalTestCaseVo {
        this['execution_type'] = executionType;
        return this;
    }
    public set executionType(executionType: NameAndIdVo  | undefined) {
        this['execution_type'] = executionType;
    }
    public get executionType(): NameAndIdVo | undefined {
        return this['execution_type'];
    }
    public withTestType(testType: IntegerIdAndNameVo): ExternalTestCaseVo {
        this['test_type'] = testType;
        return this;
    }
    public set testType(testType: IntegerIdAndNameVo  | undefined) {
        this['test_type'] = testType;
    }
    public get testType(): IntegerIdAndNameVo | undefined {
        return this['test_type'];
    }
    public withCreateInfo(createInfo: CreateInfoVo): ExternalTestCaseVo {
        this['create_info'] = createInfo;
        return this;
    }
    public set createInfo(createInfo: CreateInfoVo  | undefined) {
        this['create_info'] = createInfo;
    }
    public get createInfo(): CreateInfoVo | undefined {
        return this['create_info'];
    }
    public withExecuteInfo(executeInfo: ExecuteInfoVo): ExternalTestCaseVo {
        this['execute_info'] = executeInfo;
        return this;
    }
    public set executeInfo(executeInfo: ExecuteInfoVo  | undefined) {
        this['execute_info'] = executeInfo;
    }
    public get executeInfo(): ExecuteInfoVo | undefined {
        return this['execute_info'];
    }
    public withAssociateIssueInfo(associateIssueInfo: AssociateIssueInfoVo): ExternalTestCaseVo {
        this['associate_issue_info'] = associateIssueInfo;
        return this;
    }
    public set associateIssueInfo(associateIssueInfo: AssociateIssueInfoVo  | undefined) {
        this['associate_issue_info'] = associateIssueInfo;
    }
    public get associateIssueInfo(): AssociateIssueInfoVo | undefined {
        return this['associate_issue_info'];
    }
    public withAssociateDefectInfo(associateDefectInfo: AssociateDefectInfoVo): ExternalTestCaseVo {
        this['associate_defect_info'] = associateDefectInfo;
        return this;
    }
    public set associateDefectInfo(associateDefectInfo: AssociateDefectInfoVo  | undefined) {
        this['associate_defect_info'] = associateDefectInfo;
    }
    public get associateDefectInfo(): AssociateDefectInfoVo | undefined {
        return this['associate_defect_info'];
    }
}