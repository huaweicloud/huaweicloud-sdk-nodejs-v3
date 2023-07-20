import { CommandTimeTakenList } from './CommandTimeTakenList';
import { DiagnosisDimension } from './DiagnosisDimension';


export class DiagnosisNodeReport {
    private 'node_ip'?: string;
    private 'az_code'?: string;
    private 'group_name'?: string;
    private 'abnormal_sum'?: number;
    private 'failed_sum'?: number;
    public role?: DiagnosisNodeReportRoleEnum | string;
    private 'diagnosis_dimension_list'?: Array<DiagnosisDimension>;
    private 'command_time_taken_list'?: CommandTimeTakenList;
    public constructor(nodeIp?: string, azCode?: string, groupName?: string, abnormalSum?: number, failedSum?: number, role?: string, diagnosisDimensionList?: Array<DiagnosisDimension>, commandTimeTakenList?: CommandTimeTakenList) { 
        this['node_ip'] = nodeIp;
        this['az_code'] = azCode;
        this['group_name'] = groupName;
        this['abnormal_sum'] = abnormalSum;
        this['failed_sum'] = failedSum;
        this['role'] = role;
        this['diagnosis_dimension_list'] = diagnosisDimensionList;
        this['command_time_taken_list'] = commandTimeTakenList;
    }
    public withNodeIp(nodeIp: string): DiagnosisNodeReport {
        this['node_ip'] = nodeIp;
        return this;
    }
    public set nodeIp(nodeIp: string  | undefined) {
        this['node_ip'] = nodeIp;
    }
    public get nodeIp(): string | undefined {
        return this['node_ip'];
    }
    public withAzCode(azCode: string): DiagnosisNodeReport {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withGroupName(groupName: string): DiagnosisNodeReport {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withAbnormalSum(abnormalSum: number): DiagnosisNodeReport {
        this['abnormal_sum'] = abnormalSum;
        return this;
    }
    public set abnormalSum(abnormalSum: number  | undefined) {
        this['abnormal_sum'] = abnormalSum;
    }
    public get abnormalSum(): number | undefined {
        return this['abnormal_sum'];
    }
    public withFailedSum(failedSum: number): DiagnosisNodeReport {
        this['failed_sum'] = failedSum;
        return this;
    }
    public set failedSum(failedSum: number  | undefined) {
        this['failed_sum'] = failedSum;
    }
    public get failedSum(): number | undefined {
        return this['failed_sum'];
    }
    public withRole(role: DiagnosisNodeReportRoleEnum | string): DiagnosisNodeReport {
        this['role'] = role;
        return this;
    }
    public withDiagnosisDimensionList(diagnosisDimensionList: Array<DiagnosisDimension>): DiagnosisNodeReport {
        this['diagnosis_dimension_list'] = diagnosisDimensionList;
        return this;
    }
    public set diagnosisDimensionList(diagnosisDimensionList: Array<DiagnosisDimension>  | undefined) {
        this['diagnosis_dimension_list'] = diagnosisDimensionList;
    }
    public get diagnosisDimensionList(): Array<DiagnosisDimension> | undefined {
        return this['diagnosis_dimension_list'];
    }
    public withCommandTimeTakenList(commandTimeTakenList: CommandTimeTakenList): DiagnosisNodeReport {
        this['command_time_taken_list'] = commandTimeTakenList;
        return this;
    }
    public set commandTimeTakenList(commandTimeTakenList: CommandTimeTakenList  | undefined) {
        this['command_time_taken_list'] = commandTimeTakenList;
    }
    public get commandTimeTakenList(): CommandTimeTakenList | undefined {
        return this['command_time_taken_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiagnosisNodeReportRoleEnum {
    MASTER = 'master',
    SLAVE = 'slave'
}
